import { Module } from '@nestjs/common';
import { GpuController } from './gpu.controller';
import { GpuService } from './gpu.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GpuController],
  providers: [GpuService],
})
export class GpuModule {}
