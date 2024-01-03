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
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PartsListDto } from './dto/parts-list.dto';
import { PartslistService } from './partslist.service';

interface AuthenticatedRequest extends Request {
  user: any; // 漸次型定義
}

@UseGuards(AuthGuard('jwt'))
@Controller('partslist')
export class PartslistController {
  constructor(private readonly partslistService: PartslistService) {}

  // 全てのパーツリストを取得 (キーワード検索可能)
  @Get()
  findAll(@Query('keyword') keyword?: string) {
    return this.partslistService.findAll(keyword);
  }

  // 特定のIDを持つパーツリストを取得
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.partslistService.findOne(id);
  }

  // 新しいパーツリストを作成
  @Post()
  async create(@Body() dto: PartsListDto, @Req() req: any) {
    const userId = req.user.id; // JWTトークンからユーザーIDを取得
    return await this.partslistService.create({ ...dto, userId });
  }

  // 特定のIDを持つパーツリストを更新
  @Put(':id')
  async update(
    @Req() req: AuthenticatedRequest,
    @Param('id', ParseIntPipe) partslistId: number,
    @Body() dto: PartsListDto,
  ) {
    const userId = req.user.id; // JWTトークンからユーザーIDを取得
    return await this.partslistService.updateWithUser(userId, partslistId, dto);
  }

  // 特定のIDを持つパーツリストを削除
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.partslistService.delete(id);
  }
}
