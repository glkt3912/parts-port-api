import { Module } from '@nestjs/common';
import { PartslistService } from './partslist.service';
import { PartslistController } from './partslist.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PartslistService],
  controllers: [PartslistController],
})
export class PartslistModule {}
