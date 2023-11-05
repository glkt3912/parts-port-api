import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from 'src/interfaces/crud.interfaces';
import { PrismaService } from 'src/prisma/prisma.service';
import { Display } from './interfaces/display.interfaces';
import { CreateDisplayDto, UpdateDisplayDto } from './dto/display.dto';

@Injectable()
export class DisplayService implements CrudService<Display> {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Display[]> {
    try {
      return await this.prisma.display.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve categories.');
    }
  }

  async findOne(id: number): Promise<Display> {
    try {
      const Display = await this.prisma.display.findUnique({ where: { id } });
      if (!Display) {
        throw new NotFoundException(`Display with ID ${id} not found.`);
      }
      return Display;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to retrieve Display with ID ${id}.`,
      );
    }
  }
  async search(keyword: string): Promise<Display[]> {
    try {
      return await this.prisma.display.findMany({
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

  async create(dto: CreateDisplayDto): Promise<Display> {
    try {
      const Display = await this.prisma.display.create({ data: dto });
      return Display;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A Display with the given name already exists.',
          );
        }
      }
      throw error;
    }
  }

  async update(DisplayId: number, dto: UpdateDisplayDto): Promise<Display> {
    try {
      const Display = await this.prisma.display.update({
        where: {
          id: DisplayId,
        },
        data: {
          ...dto,
        },
      });
      return Display;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A Display with the given details already exists.',
          );
        }
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `A Display with ID ${DisplayId} does not exist.`,
          );
        }
      }
      throw error;
    }
  }

  async delete(DisplayId: number): Promise<void> {
    try {
      await this.prisma.display.delete({
        where: { id: DisplayId },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `A Display with ID ${DisplayId} does not exist.`,
          );
        }
      }
      throw error;
    }
  }
}
