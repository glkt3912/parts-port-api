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
import { PowerService } from './power.service';
import { CreatePowerDto, UpdatePowerDto } from './dto/power.dto';

@Controller('power')
export class PowerController {
  constructor(private readonly powerService: PowerService) {}

  // 全てのpowerを取得
  @Get()
  findAll(@Query('keyword') keyword?: string) {
    if (keyword) {
      return this.powerService.search(keyword);
    }
    return this.powerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.powerService.findOne(id);
  }

  // キーワードに基づいてpowerを検索
  @Get('search')
  async search(@Query('keyword') keyword: string) {
    return await this.powerService.search(keyword);
  }

  // 新しいpowerを作成
  @Post()
  async create(@Body() dto: CreatePowerDto) {
    return await this.powerService.create(dto);
  }

  // 特定のIDを持つpowerを更新
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePowerDto,
  ) {
    return await this.powerService.update(id, dto);
  }

  // 特定のIDを持つpowerを削除
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.powerService.delete(id);
  }
}
