import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { PartslistModule } from './partslist/partslist.module';
import { CpuController } from './cpu/cpu.controller';
import { CpuService } from './cpu/cpu.service';
import { CpuModule } from './cpu/cpu.module';
import { MotherboardModule } from './motherboard/motherboard.module';
import { MemoryModule } from './memory/memory.module';
import { HddController } from './hdd/hdd.controller';
import { HddModule } from './hdd/hdd.module';
import { SsdService } from './ssd/ssd.service';
import { SsdController } from './ssd/ssd.controller';
import { SsdModule } from './ssd/ssd.module';
import { GpuModule } from './gpu/gpu.module';
import { HddService } from './hdd/hdd.service';
import { PowerModule } from './power/power.module';
import { PccaseModule } from './pccase/pccase.module';
import { CoolerModule } from './cooler/cooler.module';
import { DisplayModule } from './display/display.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    CategoryModule,
    PrismaModule,
    PartslistModule,
    CpuModule,
    MotherboardModule,
    MemoryModule,
    HddModule,
    SsdModule,
    GpuModule,
    PowerModule,
    PccaseModule,
    CoolerModule,
    DisplayModule,
  ],
  controllers: [AppController, CpuController, HddController, SsdController],
  providers: [AppService, CpuService, HddService, SsdService],
})
export class AppModule {}
