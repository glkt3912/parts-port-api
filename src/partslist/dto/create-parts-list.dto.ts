import { IsString, IsNotEmpty, IsBoolean, IsOptional, IsInt } from 'class-validator';

export class CreatePartsListDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  isOpened: boolean;

  @IsInt()
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
  videocardId?: number;

  @IsInt()
  @IsOptional()
  powerId?: number;

  @IsInt()
  @IsOptional()
  pccaseId?: number;

  @IsInt()
  @IsOptional()
  cpucoolerId?: number;

  @IsInt()
  @IsOptional()
  displayId?: number;
}