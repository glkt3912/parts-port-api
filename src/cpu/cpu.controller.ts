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
import { CreateCpuDto, UpdateCpuDto } from './dto/cpu.dto';
import { CpuService } from './cpu.service';

@Controller('cpu')
export class CpuController {
  constructor(private readonly cpuService: CpuService) {}

  // 全てのCPUを取得
  @Get()
  findAll(@Query('keyword') keyword?: string) {
    if (keyword) {
      return this.cpuService.search(keyword);
    }
    return this.cpuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cpuService.findOne(id);
  }

  // キーワードに基づいてCPUを検索
  @Get('search')
  async search(@Query('keyword') keyword: string) {
    return await this.cpuService.search(keyword);
  }

  // 新しいCPUを作成
  @Post()
  async create(@Body() dto: CreateCpuDto) {
    return await this.cpuService.create(dto);
  }

  // 特定のIDを持つCPUを更新
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCpuDto,
  ) {
    return await this.cpuService.update(id, dto);
  }

  // 特定のIDを持つCPUを削除
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.cpuService.delete(id);
  }
}
