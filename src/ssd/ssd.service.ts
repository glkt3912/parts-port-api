import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from 'src/interfaces/crud.interfaces';
import { PrismaService } from 'src/prisma/prisma.service';
import { Ssd } from './interfaces/ssd.interfaces';
import { CreateSsdDto, UpdateSsdDto } from './dto/ssd.dto';

@Injectable()
export class SsdService implements CrudService<Ssd> {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Ssd[]> {
    try {
      return await this.prisma.ssd.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve categories.');
    }
  }

  async findOne(id: number): Promise<Ssd> {
    try {
      const ssd = await this.prisma.ssd.findUnique({
        where: { id },
      });
      if (!ssd) {
        throw new NotFoundException(`ssd with ID ${id} not found.`);
      }
      return ssd;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to retrieve ssd with ID ${id}.`,
      );
    }
  }
  async search(keyword: string): Promise<Ssd[]> {
    try {
      return await this.prisma.ssd.findMany({
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

  async create(dto: CreateSsdDto): Promise<Ssd> {
    try {
      const ssd = await this.prisma.ssd.create({ data: dto });
      return ssd;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A ssd with the given name already exists.',
          );
        }
      }
      throw error;
    }
  }

  async update(ssdId: number, dto: UpdateSsdDto): Promise<Ssd> {
    try {
      const ssd = await this.prisma.ssd.update({
        where: {
          id: ssdId,
        },
        data: {
          ...dto,
        },
      });
      return ssd;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A ssd with the given details already exists.',
          );
        }
        if (error.code === 'P2025') {
          throw new NotFoundException(`A ssd with ID ${ssdId} does not exist.`);
        }
      }
      throw error;
    }
  }

  async delete(ssdId: number): Promise<void> {
    try {
      await this.prisma.ssd.delete({
        where: { id: ssdId },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`A ssd with ID ${ssdId} does not exist.`);
        }
      }
      throw error;
    }
  }
}
