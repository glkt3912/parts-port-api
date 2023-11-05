import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from 'src/interfaces/crud.interfaces';
import { PrismaService } from 'src/prisma/prisma.service';
import { Gpu } from './interfaces/gpu.interfaces';
import { CreateGpuDto, UpdateGpuDto } from './dto/gpu.dto';

@Injectable()
export class GpuService implements CrudService<Gpu> {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Gpu[]> {
    try {
      return await this.prisma.gpu.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve categories.');
    }
  }

  async findOne(id: number): Promise<Gpu> {
    try {
      const gpu = await this.prisma.gpu.findUnique({ where: { id } });
      if (!gpu) {
        throw new NotFoundException(`gpu with ID ${id} not found.`);
      }
      return gpu;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to retrieve gpu with ID ${id}.`,
      );
    }
  }
  async search(keyword: string): Promise<Gpu[]> {
    try {
      return await this.prisma.gpu.findMany({
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

  async create(dto: CreateGpuDto): Promise<Gpu> {
    try {
      const gpu = await this.prisma.gpu.create({ data: dto });
      return gpu;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A gpu with the given name already exists.',
          );
        }
      }
      throw error;
    }
  }

  async update(gpuId: number, dto: UpdateGpuDto): Promise<Gpu> {
    try {
      const gpu = await this.prisma.gpu.update({
        where: {
          id: gpuId,
        },
        data: {
          ...dto,
        },
      });
      return gpu;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A gpu with the given details already exists.',
          );
        }
        if (error.code === 'P2025') {
          throw new NotFoundException(`A gpu with ID ${gpuId} does not exist.`);
        }
      }
      throw error;
    }
  }

  async delete(gpuId: number): Promise<void> {
    try {
      await this.prisma.gpu.delete({
        where: { id: gpuId },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`A gpu with ID ${gpuId} does not exist.`);
        }
      }
      throw error;
    }
  }
}
