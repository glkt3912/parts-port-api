import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  IsInt,
} from 'class-validator';

export class PartsListDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  isOpened: boolean = true;

  @IsInt()
  @IsOptional()
  userId: number;

  @IsInt()
  @IsOptional()
  cpuId?: number;

  @IsInt()
  @IsOptional()
  motherboardId?: number;

  @IsInt()
  @IsOptional()
  memoryId?: number;

  @IsInt()
  @IsOptional()
  hddId?: number;

  @IsInt()
  @IsOptional()
  ssdId?: number;

  @IsInt()
  @IsOptional()
  gpuId?: number;

  @IsInt()
  @IsOptional()
  powerId?: number;

  @IsInt()
  @IsOptional()
  pccaseId?: number;

  @IsInt()
  @IsOptional()
  coolerId?: number;

  @IsInt()
  @IsOptional()
  displayId?: number;

  constructor(partial: Partial<PartsListDto>) {
    Object.assign(this, partial);
    this.isOpened = this.isOpened ?? true;
  }
}
