import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateMemoryDto, UpdateMemoryDto } from './dto/memory.dto';
import { MemoryService } from './memory.service';

@Controller('memory')
export class MemoryController {
  constructor(private readonly memoryService: MemoryService) {}

  // 全てのmemoryを取得
  @Get()
  findAll(@Query('keyword') keyword?: string) {
    if (keyword) {
      return this.memoryService.search(keyword);
    }
    return this.memoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.memoryService.findOne(id);
  }

  // キーワードに基づいてmemoryを検索
  @Get('search')
  async search(@Query('keyword') keyword: string) {
    return await this.memoryService.search(keyword);
  }

  // 新しいmemoryを作成
  @Post()
  async create(@Body() dto: CreateMemoryDto) {
    return await this.memoryService.create(dto);
  }

  // 特定のIDを持つmemoryを更新
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateMemoryDto,
  ) {
    return await this.memoryService.update(id, dto);
  }

  // 特定のIDを持つmemoryを削除
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.memoryService.delete(id);
  }
}
