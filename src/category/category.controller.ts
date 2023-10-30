import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from '@prisma/client';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('create')
  createCategory(
    @Body() dto: CreateCategoryDto
  ): Promise<Category> {
    return this.categoryService.createCategory(dto)
  }

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAllCategories();
  }

  @Get('search')
  search(@Query('keyword') keyword: string): Promise<Category[]> {
      return this.categoryService.searchCategories(keyword);
  }
}
