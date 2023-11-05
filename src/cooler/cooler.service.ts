import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from 'src/interfaces/crud.interfaces';
import { PrismaService } from 'src/prisma/prisma.service';
import { Cooler } from './interfaces/cooler.interfaces';
import { CreateCoolerDto, UpdateCoolerDto } from './dto/cooler.dto';

@Injectable()
export class CoolerService implements CrudService<Cooler> {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Cooler[]> {
    try {
      return await this.prisma.cooler.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve categories.');
    }
  }

  async findOne(id: number): Promise<Cooler> {
    try {
      const Cooler = await this.prisma.cooler.findUnique({
        where: { id },
      });
      if (!Cooler) {
        throw new NotFoundException(`Cooler with ID ${id} not found.`);
      }
      return Cooler;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to retrieve Cooler with ID ${id}.`,
      );
    }
  }
  async search(keyword: string): Promise<Cooler[]> {
    try {
      return await this.prisma.cooler.findMany({
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

  async create(dto: CreateCoolerDto): Promise<Cooler> {
    try {
      const Cooler = await this.prisma.cooler.create({ data: dto });
      return Cooler;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A Cooler with the given name already exists.',
          );
        }
      }
      throw error;
    }
  }

  async update(CoolerId: number, dto: UpdateCoolerDto): Promise<Cooler> {
    try {
      const Cooler = await this.prisma.cooler.update({
        where: {
          id: CoolerId,
        },
        data: {
          ...dto,
        },
      });
      return Cooler;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A Cooler with the given details already exists.',
          );
        }
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `A Cooler with ID ${CoolerId} does not exist.`,
          );
        }
      }
      throw error;
    }
  }

  async delete(CoolerId: number): Promise<void> {
    try {
      await this.prisma.cooler.delete({
        where: { id: CoolerId },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `A Cooler with ID ${CoolerId} does not exist.`,
          );
        }
      }
      throw error;
    }
  }
}
