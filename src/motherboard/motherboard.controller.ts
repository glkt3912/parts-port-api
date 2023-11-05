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
import {
  CreateMotherBoardDto,
  UpdateMotherBoardDto,
} from './dto/motherboard.dto';
import { MotherboardService } from './motherboard.service';

@Controller('motherboard')
export class MotherboardController {
  constructor(private readonly motherboardService: MotherboardService) {}

  // 全てのmotherboardを取得
  @Get()
  findAll(@Query('keyword') keyword?: string) {
    if (keyword) {
      return this.motherboardService.search(keyword);
    }
    return this.motherboardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.motherboardService.findOne(id);
  }

  // キーワードに基づいてmotherboardを検索
  @Get('search')
  async search(@Query('keyword') keyword: string) {
    return await this.motherboardService.search(keyword);
  }

  // 新しいmotherboardを作成
  @Post()
  async create(@Body() dto: CreateMotherBoardDto) {
    return await this.motherboardService.create(dto);
  }

  // 特定のIDを持つmotherboardを更新
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateMotherBoardDto,
  ) {
    return await this.motherboardService.update(id, dto);
  }

  // 特定のIDを持つmotherboardを削除
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.motherboardService.delete(id);
  }
}
