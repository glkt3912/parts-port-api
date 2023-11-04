import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCpuDto, UpdateCpuDto } from './dto/cpu.dto';
import { Cpu } from './interfaces/cpu.interfaces';
import { CrudService } from 'src/interfaces/crud.interfaces';

@Injectable()
export class CpuService implements CrudService<Cpu> {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Cpu[]> {
    try {
      return await this.prisma.cpu.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve categories.');
    }
  }

  async findOne(id: number): Promise<Cpu> {
    try {
      const cpu = await this.prisma.cpu.findUnique({ where: { id } });
      if (!cpu) {
        throw new NotFoundException(`cpu with ID ${id} not found.`);
      }
      return cpu;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to retrieve cpu with ID ${id}.`,
      );
    }
  }
  async search(keyword: string): Promise<Cpu[]> {
    try {
      return await this.prisma.cpu.findMany({
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

  async create(dto: CreateCpuDto): Promise<Cpu> {
    try {
      const cpu = await this.prisma.cpu.create({ data: dto });
      return cpu;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A cpu with the given name already exists.',
          );
        }
      }
      throw error;
    }
  }

  async update(cpuId: number, dto: UpdateCpuDto): Promise<Cpu> {
    try {
      const cpu = await this.prisma.cpu.update({
        where: {
          id: cpuId,
        },
        data: {
          ...dto,
        },
      });
      return cpu;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A cpu with the given details already exists.',
          );
        }
        if (error.code === 'P2025') {
          throw new NotFoundException(`A cpu with ID ${cpuId} does not exist.`);
        }
      }
      throw error;
    }
  }

  async delete(cpuId: number): Promise<void> {
    try {
      await this.prisma.cpu.delete({
        where: { id: cpuId },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`A cpu with ID ${cpuId} does not exist.`);
        }
      }
      throw error;
    }
  }
}
