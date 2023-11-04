import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PartsListDto } from './dto/parts-list.dto';
import { PartslistService } from './partslist.service';

@Controller('partslists')
export class PartslistController {
  constructor(private readonly partslistService: PartslistService) {}

  // 全てのパーツリストを取得
  @Get()
  async findAll() {
    return await this.partslistService.findAll();
  }

  // 特定のIDを持つパーツリストを取得
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.partslistService.findOne(id);
  }

  // キーワードに基づいてパーツリストを検索
  @Get('search')
  async search(@Query('keyword') keyword: string) {
    return await this.partslistService.search(keyword);
  }

  // 新しいパーツリストを作成
  @Post()
  async create(@Body() dto: PartsListDto) {
    return await this.partslistService.create(dto);
  }

  // 特定のIDを持つパーツリストを更新
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: PartsListDto) {
    return await this.partslistService.update(id, dto);
  }

  // 特定のIDを持つパーツリストを削除
  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.partslistService.delete(id);
  }
}