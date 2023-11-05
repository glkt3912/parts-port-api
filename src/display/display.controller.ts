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
import { DisplayService } from './display.service';
import { CreateDisplayDto, UpdateDisplayDto } from './dto/display.dto';

@Controller('display')
export class DisplayController {
  constructor(private readonly displayService: DisplayService) {}

  // 全てのdisplayを取得
  @Get()
  findAll(@Query('keyword') keyword?: string) {
    if (keyword) {
      return this.displayService.search(keyword);
    }
    return this.displayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.displayService.findOne(id);
  }

  // キーワードに基づいてdisplayを検索
  @Get('search')
  async search(@Query('keyword') keyword: string) {
    return await this.displayService.search(keyword);
  }

  // 新しいdisplayを作成
  @Post()
  async create(@Body() dto: CreateDisplayDto) {
    return await this.displayService.create(dto);
  }

  // 特定のIDを持つdisplayを更新
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDisplayDto,
  ) {
    return await this.displayService.update(id, dto);
  }

  // 特定のIDを持つdisplayを削除
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.displayService.delete(id);
  }
}
