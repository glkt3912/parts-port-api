import { Module } from '@nestjs/common';
import { CoolerController } from './cooler.controller';
import { CoolerService } from './cooler.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CoolerController],
  providers: [CoolerService],
})
export class CoolerModule {}
