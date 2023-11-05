import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Hdd } from './interfaces/hdd.interfaces';
import { CrudService } from 'src/interfaces/crud.interfaces';
import { CreateHddDto, UpdateHddDto } from './dto/hdd.dto';

@Injectable()
export class HddService implements CrudService<Hdd> {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Hdd[]> {
    try {
      return await this.prisma.hdd.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve categories.');
    }
  }

  async findOne(id: number): Promise<Hdd> {
    try {
      const hdd = await this.prisma.hdd.findUnique({
        where: { id },
      });
      if (!hdd) {
        throw new NotFoundException(`Hdd with ID ${id} not found.`);
      }
      return hdd;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to retrieve Hdd with ID ${id}.`,
      );
    }
  }
  async search(keyword: string): Promise<Hdd[]> {
    try {
      return await this.prisma.hdd.findMany({
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

  async create(dto: CreateHddDto): Promise<Hdd> {
    try {
      const hdd = await this.prisma.hdd.create({ data: dto });
      return hdd;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A Hdd with the given name already exists.',
          );
        }
      }
      throw error;
    }
  }

  async update(hddId: number, dto: UpdateHddDto): Promise<Hdd> {
    try {
      const Hdd = await this.prisma.hdd.update({
        where: {
          id: hddId,
        },
        data: {
          ...dto,
        },
      });
      return Hdd;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A Hdd with the given details already exists.',
          );
        }
        if (error.code === 'P2025') {
          throw new NotFoundException(`A Hdd with ID ${HddId} does not exist.`);
        }
      }
      throw error;
    }
  }

  async delete(hddId: number): Promise<void> {
    try {
      await this.prisma.hdd.delete({
        where: { id: hddId },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`A Hdd with ID ${hddId} does not exist.`);
        }
      }
      throw error;
    }
  }
}
