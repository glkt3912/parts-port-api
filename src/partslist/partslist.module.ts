import { Module } from '@nestjs/common';
import { PartslistService } from './partslist.service';
import { PartslistController } from './partslist.controller';

@Module({
  providers: [PartslistService],
  controllers: [PartslistController]
})
export class PartslistModule {}
