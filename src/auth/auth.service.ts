import { Injectable, ForbiddenException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { Msg, Jwt } from './interfaces/auth.interface';
import { MyLoggerService } from 'src/my-logger/my-logger.service';
import { privateDecrypt } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
    private readonly logger: MyLoggerService,
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
      this.logger.log(`New user registered: ${dto.email}`);
      return {
        message: 'ok',
      };
    } catch (error) {
      this.logger.error(
        `User registration failed: ${error.message}`,
        error.stack,
      );
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
    this.logger.log(`Login attempt for user: ${dto.email || dto.name}`);
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
    if (!user) {
      this.logger.warn(
        `Login failed: User not found for ${dto.email || dto.name}`,
      );
      throw new ForbiddenException('Email or password incorrect.');
    }
    const isValid = await bcrypt.compare(dto.password, user.hashedPassword);
    if (!isValid) {
      this.logger.warn(
        `Login failed: Invalid password for ${dto.email || dto.name}`,
      );
      throw new ForbiddenException('Email or password incorrect.');
    }
    this.logger.log(`User logged in: ${user.email}`);
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
    this.logger.log(`JWT generated for user: ${email}`);
    return {
      accessToken: token,
    };
  }
}
