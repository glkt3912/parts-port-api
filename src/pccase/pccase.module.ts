import { Module } from '@nestjs/common';
import { PccaseController } from './pccase.controller';
import { PccaseService } from './pccase.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PccaseController],
  providers: [PccaseService],
})
export class PccaseModule {}
