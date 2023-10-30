import { Injectable, ForbiddenException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { Msg, Jwt } from './interfaces/auth.interface';
import { privateDecrypt } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}
  async signUp(dto: SignUpDto): Promise<Msg> {
    const hashed = await bcrypt.hash(dto.password, 12);
    try {
      await this.prisma.user.create({
        data: {
          email: dto.email,
          hashedPassword: hashed,
          name: dto.name,
        },
      });
      return {
        message: 'ok',
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          // P2002 error.code (NestJs)
          throw new ForbiddenException('This email is already token.');
        }
      }
      throw error;
    }
  }
  async login(dto: LoginDto): Promise<Jwt> {
    if (!dto.name && !dto.email) {
      throw new ForbiddenException('Either name or email must be provided.');
    }
    let user;
    if (dto.email) {
      user = await this.prisma.user.findUnique({
          where: { email: dto.email },
      });
    } else if (dto.name) {
      user = await this.prisma.user.findUnique({
          where: { name: dto.name },
      });
    }
    if (!user) throw new ForbiddenException('Email or password incorrect.');
    const isValid = await bcrypt.compare(dto.password, user.hashedPassword);
    if (!isValid) throw new ForbiddenException('Email or password incorrect.');
    return this.generateJwt(user.id, user.email);
  }
  async generateJwt(userId: number, email: string): Promise<Jwt> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '5m',
      secret: secret,
    });
    return {
      accessToken: token,
    };
  }
}
