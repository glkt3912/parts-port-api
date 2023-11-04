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

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    CategoryModule,
    PrismaModule,
    PartslistModule,
    CpuModule,
  ],
  controllers: [AppController, CpuController],
  providers: [AppService, CpuService],
})
export class AppModule {}
