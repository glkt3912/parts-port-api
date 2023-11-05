import { Module } from '@nestjs/common';
import { HddService } from './hdd.service';
import { HddController } from './hdd.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [HddService],
  controllers: [HddController],
})
export class HddModule {}
