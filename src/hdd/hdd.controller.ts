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
import { HddService } from './hdd.service';
import { CreateHddDto, UpdateHddDto } from './dto/hdd.dto';

@Controller('hdd')
export class HddController {
  constructor(private readonly hddService: HddService) {}

  // 全てのhddを取得
  @Get()
  findAll(@Query('keyword') keyword?: string) {
    if (keyword) {
      return this.hddService.search(keyword);
    }
    return this.hddService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.hddService.findOne(id);
  }

  // キーワードに基づいてhddを検索
  @Get('search')
  async search(@Query('keyword') keyword: string) {
    return await this.hddService.search(keyword);
  }

  // 新しいhddを作成
  @Post()
  async create(@Body() dto: CreateHddDto) {
    return await this.hddService.create(dto);
  }

  // 特定のIDを持つhddを更新
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateHddDto,
  ) {
    return await this.hddService.update(id, dto);
  }

  // 特定のIDを持つhddを削除
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.hddService.delete(id);
  }
}
