import { Module } from '@nestjs/common';
import { MotherboardService } from './motherboard.service';
import { MotherboardController } from './motherboard.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [MotherboardService],
  controllers: [MotherboardController],
})
export class MotherboardModule {}
