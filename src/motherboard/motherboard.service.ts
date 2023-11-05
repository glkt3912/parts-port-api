import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from 'src/interfaces/crud.interfaces';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateMotherBoardDto,
  UpdateMotherBoardDto,
} from './dto/motherboard.dto';
import { MotherBoard } from './interfaces/motherboard.interfaces';

@Injectable()
export class MotherboardService implements CrudService<MotherBoard> {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<MotherBoard[]> {
    try {
      return await this.prisma.motherBoard.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve categories.');
    }
  }

  async findOne(id: number): Promise<MotherBoard> {
    try {
      const MotherBoard = await this.prisma.motherBoard.findUnique({
        where: { id },
      });
      if (!MotherBoard) {
        throw new NotFoundException(`MotherBoard with ID ${id} not found.`);
      }
      return MotherBoard;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to retrieve MotherBoard with ID ${id}.`,
      );
    }
  }
  async search(keyword: string): Promise<MotherBoard[]> {
    try {
      return await this.prisma.motherBoard.findMany({
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

  async create(dto: CreateMotherBoardDto): Promise<MotherBoard> {
    try {
      const motherBoard = await this.prisma.motherBoard.create({ data: dto });
      return motherBoard;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A MotherBoard with the given name already exists.',
          );
        }
      }
      throw error;
    }
  }

  async update(
    MotherBoardId: number,
    dto: UpdateMotherBoardDto,
  ): Promise<MotherBoard> {
    try {
      const MotherBoard = await this.prisma.motherBoard.update({
        where: {
          id: MotherBoardId,
        },
        data: {
          ...dto,
        },
      });
      return MotherBoard;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A MotherBoard with the given details already exists.',
          );
        }
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `A MotherBoard with ID ${MotherBoardId} does not exist.`,
          );
        }
      }
      throw error;
    }
  }

  async delete(MotherBoardId: number): Promise<void> {
    try {
      await this.prisma.motherBoard.delete({
        where: { id: MotherBoardId },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `A MotherBoard with ID ${MotherBoardId} does not exist.`,
          );
        }
      }
      throw error;
    }
  }
}
