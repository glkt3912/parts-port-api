import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './interfaces/category.interfaces';
import { CrudService } from 'src/interfaces/crud.interfaces';

@Injectable()
export class CategoryService implements CrudService<Category> {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async findOne(id: number): Promise<Category> {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async search(keyword: string): Promise<Category[]> {
    return this.prisma.category.findMany({
        where: {
            name: {
                contains: keyword,
                mode: 'insensitive' // 大文字・小文字を区別しない
            }
        }
    });
  }

  async create(dto: CreateCategoryDto): Promise<Category> {
    const category = this.prisma.category.create({ data: dto });
    return category;
  }

  async update(categoryId: number, dto: UpdateCategoryDto): Promise<Category> {
    return this.prisma.category.update({
      where: {
        id: categoryId,
      },
      data: {
        ...dto,
      },
    });
  }

  async delete(categoryId: number): Promise<void> {
    this.prisma.category.delete({
      where: { id: categoryId },
    });
  }

  // async findOne(id: number): Promise<Category> {
  //   return this.prisma.category.findUnique({ where: { id } });
  // }

  // async create(data: Prisma.CategoryCreateInput): Promise<Category> {
  //   return this.prisma.category.create({ data });
  // }

  // async update(id: number, data: Prisma.CategoryUpdateInput): Promise<Category> {
  //   return this.prisma.category.update({ where: { id }, data });
  // }

  // async remove(id: number): Promise<void> {
  //   await this.prisma.category.delete({ where: { id } });
  // }
}
