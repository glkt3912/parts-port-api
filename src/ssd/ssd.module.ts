import { Module } from '@nestjs/common';
import { SsdService } from './ssd.service';
import { SsdController } from './ssd.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [SsdService],
  controllers: [SsdController],
})
export class SsdModule {}
