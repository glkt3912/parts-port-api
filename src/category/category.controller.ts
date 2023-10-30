import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from '@prisma/client';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category> {
      return this.categoryService.findOne(+id);
  }

  @Get('search')
  search(@Query('keyword') keyword: string): Promise<Category[]> {
      return this.categoryService.search(keyword);
  }

  @Post('create')
  create(
    @Body() dto: CreateCategoryDto
  ): Promise<Category> {
    return this.categoryService.create(dto)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCategoryDto) {
    return this.categoryService.update(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.categoryService.delete(+id);
  }
}
