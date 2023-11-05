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
import { SsdService } from './ssd.service';
import { CreateSsdDto, UpdateSsdDto } from './dto/ssd.dto';

@Controller('ssd')
export class SsdController {
  constructor(private readonly ssdService: SsdService) {}

  // 全てのssdを取得
  @Get()
  findAll(@Query('keyword') keyword?: string) {
    if (keyword) {
      return this.ssdService.search(keyword);
    }
    return this.ssdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ssdService.findOne(id);
  }

  // キーワードに基づいてssdを検索
  @Get('search')
  async search(@Query('keyword') keyword: string) {
    return await this.ssdService.search(keyword);
  }

  // 新しいssdを作成
  @Post()
  async create(@Body() dto: CreateSsdDto) {
    return await this.ssdService.create(dto);
  }

  // 特定のIDを持つssdを更新
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateSsdDto,
  ) {
    return await this.ssdService.update(id, dto);
  }

  // 特定のIDを持つssdを削除
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.ssdService.delete(id);
  }
}
