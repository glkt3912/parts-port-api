import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from 'src/interfaces/crud.interfaces';
import { PrismaService } from 'src/prisma/prisma.service';
import { Power } from './interfaces/power.interfaces';
import { CreatePowerDto, UpdatePowerDto } from './dto/power.dto';

@Injectable()
export class PowerService implements CrudService<Power> {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Power[]> {
    try {
      return await this.prisma.power.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve categories.');
    }
  }

  async findOne(id: number): Promise<Power> {
    try {
      const power = await this.prisma.power.findUnique({ where: { id } });
      if (!power) {
        throw new NotFoundException(`power with ID ${id} not found.`);
      }
      return power;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to retrieve power with ID ${id}.`,
      );
    }
  }
  async search(keyword: string): Promise<Power[]> {
    try {
      return await this.prisma.power.findMany({
        where: {
          name: {
            contains: keyword,
            mode: 'insensitive', // 大文字・小文字を区別しない
          },
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Search operation failed.');
    }
  }

  async create(dto: CreatePowerDto): Promise<Power> {
    try {
      const power = await this.prisma.power.create({ data: dto });
      return power;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A power with the given name already exists.',
          );
        }
      }
      throw error;
    }
  }

  async update(powerId: number, dto: UpdatePowerDto): Promise<Power> {
    try {
      const power = await this.prisma.power.update({
        where: {
          id: powerId,
        },
        data: {
          ...dto,
        },
      });
      return power;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A power with the given details already exists.',
          );
        }
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `A power with ID ${powerId} does not exist.`,
          );
        }
      }
      throw error;
    }
  }

  async delete(powerId: number): Promise<void> {
    try {
      await this.prisma.power.delete({
        where: { id: powerId },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `A power with ID ${powerId} does not exist.`,
          );
        }
      }
      throw error;
    }
  }
}
