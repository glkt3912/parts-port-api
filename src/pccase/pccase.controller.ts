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
import { PccaseService } from './pccase.service';
import { CreatePcCaseDto, UpdatePcCaseDto } from './dto/pccase.dto';

@Controller('pccase')
export class PccaseController {
  constructor(private readonly pccaseService: PccaseService) {}

  // 全てのpccaseを取得
  @Get()
  findAll(@Query('keyword') keyword?: string) {
    if (keyword) {
      return this.pccaseService.search(keyword);
    }
    return this.pccaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pccaseService.findOne(id);
  }

  // キーワードに基づいてpccaseを検索
  @Get('search')
  async search(@Query('keyword') keyword: string) {
    return await this.pccaseService.search(keyword);
  }

  // 新しいpccaseを作成
  @Post()
  async create(@Body() dto: CreatePcCaseDto) {
    return await this.pccaseService.create(dto);
  }

  // 特定のIDを持つpccaseを更新
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePcCaseDto,
  ) {
    return await this.pccaseService.update(id, dto);
  }

  // 特定のIDを持つpccaseを削除
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.pccaseService.delete(id);
  }
}
