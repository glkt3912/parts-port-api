import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PcCase } from './interfaces/pccase.interfaces';
import { CrudService } from 'src/interfaces/crud.interfaces';
import { CreatePcCaseDto, UpdatePcCaseDto } from './dto/pccase.dto';

@Injectable()
export class PccaseService implements CrudService<PcCase> {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<PcCase[]> {
    try {
      return await this.prisma.pcCase.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve categories.');
    }
  }

  async findOne(id: number): Promise<PcCase> {
    try {
      const pccase = await this.prisma.pcCase.findUnique({ where: { id } });
      if (!pccase) {
        throw new NotFoundException(`PcCase with ID ${id} not found.`);
      }
      return pccase;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to retrieve PcCase with ID ${id}.`,
      );
    }
  }
  async search(keyword: string): Promise<PcCase[]> {
    try {
      return await this.prisma.pcCase.findMany({
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

  async create(dto: CreatePcCaseDto): Promise<PcCase> {
    try {
      const Pccase = await this.prisma.pcCase.create({ data: dto });
      return Pccase;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A PcCase with the given name already exists.',
          );
        }
      }
      throw error;
    }
  }

  async update(PcCaseId: number, dto: UpdatePcCaseDto): Promise<PcCase> {
    try {
      const Pccase = await this.prisma.pcCase.update({
        where: {
          id: PcCaseId,
        },
        data: {
          ...dto,
        },
      });
      return Pccase;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A PcCase with the given details already exists.',
          );
        }
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `A PcCase with ID ${PcCaseId} does not exist.`,
          );
        }
      }
      throw error;
    }
  }

  async delete(PcCaseId: number): Promise<void> {
    try {
      await this.prisma.pcCase.delete({
        where: { id: PcCaseId },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `A PcCase with ID ${PcCaseId} does not exist.`,
          );
        }
      }
      throw error;
    }
  }
}
