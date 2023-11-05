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
import { CoolerService } from './cooler.service';
import { CreateCoolerDto, UpdateCoolerDto } from './dto/cooler.dto';

@Controller('cooler')
export class CoolerController {
  constructor(private readonly coolerService: CoolerService) {}

  // 全てのcoolerを取得
  @Get()
  findAll(@Query('keyword') keyword?: string) {
    if (keyword) {
      return this.coolerService.search(keyword);
    }
    return this.coolerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.coolerService.findOne(id);
  }

  // キーワードに基づいてcoolerを検索
  @Get('search')
  async search(@Query('keyword') keyword: string) {
    return await this.coolerService.search(keyword);
  }

  // 新しいcoolerを作成
  @Post()
  async create(@Body() dto: CreateCoolerDto) {
    return await this.coolerService.create(dto);
  }

  // 特定のIDを持つcoolerを更新
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCoolerDto,
  ) {
    return await this.coolerService.update(id, dto);
  }

  // 特定のIDを持つcoolerを削除
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.coolerService.delete(id);
  }
}
