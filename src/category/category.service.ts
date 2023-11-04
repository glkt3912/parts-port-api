import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './interfaces/category.interfaces';
import { CrudService } from 'src/interfaces/crud.interfaces';

@Injectable()
export class CategoryService implements CrudService<Category> {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Category[]> {
    try {
      return await this.prisma.category.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve categories.');
    }
  }

  async findOne(id: number): Promise<Category> {
    try {
      const category = await this.prisma.category.findUnique({ where: { id } });
      if (!category) {
        throw new NotFoundException(`Category with ID ${id} not found.`);
      }
      return category;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to retrieve category with ID ${id}.`,
      );
    }
  }

  async search(keyword: string): Promise<Category[]> {
    try {
      return await this.prisma.category.findMany({
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

  async create(dto: CreateCategoryDto): Promise<Category> {
    try {
      const category = await this.prisma.category.create({ data: dto });
      return category;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A category with the given name already exists.',
          );
        }
      }
      throw error;
    }
  }

  async update(categoryId: number, dto: UpdateCategoryDto): Promise<Category> {
    try {
      const category = await this.prisma.category.update({
        where: {
          id: categoryId,
        },
        data: {
          ...dto,
        },
      });
      return category;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A category with the given details already exists.',
          );
        }
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `A category with ID ${categoryId} does not exist.`,
          );
        }
      }
      throw error;
    }
  }

  async delete(categoryId: number): Promise<void> {
    try {
      await this.prisma.category.delete({
        where: { id: categoryId },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `A category with ID ${categoryId} does not exist.`,
          );
        }
      }
      throw error;
    }
  }
}
