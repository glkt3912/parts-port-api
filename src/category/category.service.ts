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
import { MyLoggerService } from 'src/my-logger/my-logger.service';

@Injectable()
export class CategoryService implements CrudService<Category> {
  constructor(
    private prisma: PrismaService,
    private logger: MyLoggerService,
  ) {}

  async findAll(): Promise<Category[]> {
    try {
      const categories = await this.prisma.category.findMany();
      this.logger.log(`Retrieved all categories, count: ${categories.length}`);
      return categories;
    } catch (error) {
      this.logger.error('Failed to retrieve categories', error.stack);
      throw new InternalServerErrorException('Failed to retrieve categories.');
    }
  }

  async findOne(id: number): Promise<Category> {
    try {
      const category = await this.prisma.category.findUnique({ where: { id } });
      if (!category) {
        this.logger.warn(`Category with ID ${id} not found.`);
        throw new NotFoundException(`Category with ID ${id} not found.`);
      }
      this.logger.log(`Retrieved category with ID ${id}`);
      return category;
    } catch (error) {
      this.logger.error(
        `Failed to retrieve category with ID ${id}`,
        error.stack,
      );
      throw new InternalServerErrorException(
        `Failed to retrieve category with ID ${id}.`,
      );
    }
  }

  async search(keyword: string): Promise<Category[]> {
    try {
      const categories = await this.prisma.category.findMany({
        where: {
          name: {
            contains: keyword,
            mode: 'insensitive', // 大文字・小文字を区別しない
          },
        },
      });
      this.logger.log(`Search completed for keyword: ${keyword}`);
      return categories;
    } catch (error) {
      this.logger.error(
        `Search operation failed for keyword: ${keyword}`,
        error.stack,
      );
      throw new InternalServerErrorException('Search operation failed.');
    }
  }

  async create(dto: CreateCategoryDto): Promise<Category> {
    try {
      const category = await this.prisma.category.create({ data: dto });
      this.logger.log(`Created new category with name: ${dto.name}`);
      return category;
    } catch (error) {
      this.logger.error(
        `Failed to create category with name: ${dto.name}`,
        error.stack,
      );
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
      this.logger.log(`Updated category with ID ${categoryId}`);
      return category;
    } catch (error) {
      this.logger.error(
        `Failed to update category with ID ${categoryId}`,
        error.stack,
      );
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
      this.logger.log(`Deleted category with ID ${categoryId}`);
    } catch (error) {
      this.logger.error(
        `Failed to delete category with ID ${categoryId}`,
        error.stack,
      );
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
