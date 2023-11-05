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
import { GpuService } from './gpu.service';
import { CreateGpuDto, UpdateGpuDto } from './dto/gpu.dto';

@Controller('gpu')
export class GpuController {
  constructor(private readonly gpuService: GpuService) {}

  // 全てのgpuを取得
  @Get()
  findAll(@Query('keyword') keyword?: string) {
    if (keyword) {
      return this.gpuService.search(keyword);
    }
    return this.gpuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.gpuService.findOne(id);
  }

  // キーワードに基づいてgpuを検索
  @Get('search')
  async search(@Query('keyword') keyword: string) {
    return await this.gpuService.search(keyword);
  }

  // 新しいgpuを作成
  @Post()
  async create(@Body() dto: CreateGpuDto) {
    return await this.gpuService.create(dto);
  }

  // 特定のIDを持つgpuを更新
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateGpuDto,
  ) {
    return await this.gpuService.update(id, dto);
  }

  // 特定のIDを持つgpuを削除
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.gpuService.delete(id);
  }
}
