import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMemoryDto, UpdateMemoryDto } from './dto/memory.dto';
import { Memory } from './interfaces/memory.interfaces';
import { CrudService } from 'src/interfaces/crud.interfaces';

@Injectable()
export class MemoryService implements CrudService<Memory> {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Memory[]> {
    try {
      return await this.prisma.memory.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve categories.');
    }
  }

  async findOne(id: number): Promise<Memory> {
    try {
      const memory = await this.prisma.memory.findUnique({
        where: { id },
      });
      if (!memory) {
        throw new NotFoundException(`memory with ID ${id} not found.`);
      }
      return memory;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to retrieve memory with ID ${id}.`,
      );
    }
  }
  async search(keyword: string): Promise<Memory[]> {
    try {
      return await this.prisma.memory.findMany({
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

  async create(dto: CreateMemoryDto): Promise<Memory> {
    try {
      const memory = await this.prisma.memory.create({ data: dto });
      return memory;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A memory with the given name already exists.',
          );
        }
      }
      throw error;
    }
  }

  async update(memoryId: number, dto: UpdateMemoryDto): Promise<Memory> {
    try {
      const memory = await this.prisma.memory.update({
        where: {
          id: memoryId,
        },
        data: {
          ...dto,
        },
      });
      return memory;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A memory with the given details already exists.',
          );
        }
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `A memory with ID ${memoryId} does not exist.`,
          );
        }
      }
      throw error;
    }
  }

  async delete(memoryId: number): Promise<void> {
    try {
      await this.prisma.memory.delete({
        where: { id: memoryId },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `A memory with ID ${memoryId} does not exist.`,
          );
        }
      }
      throw error;
    }
  }
}
