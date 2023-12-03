import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUrl,
  IsInt,
  IsPositive,
  ValidateIf,
} from 'class-validator';

export class CreateGpuDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  length: string;

  @IsNotEmpty()
  @IsString()
  chip: string;

  @IsNotEmpty()
  @IsString()
  core: string;

  @IsNotEmpty()
  @IsString()
  memory: string;

  @IsNotEmpty()
  @IsString()
  baseFrequency: string;

  @IsNotEmpty()
  @IsString()
  memoryFrequency: string;

  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  wattage: number;

  @IsNotEmpty()
  @IsString()
  interface: string;

  @IsOptional()
  @IsUrl()
  image?: string;

  @IsOptional()
  @IsUrl()
  url?: string;

  @IsOptional()
  @IsString()
  price?: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  categoryId: number;
}

export class UpdateGpuDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  length?: string;

  @IsOptional()
  @IsString()
  chip?: string;

  @IsNotEmpty()
  @IsString()
  core?: string;

  @IsOptional()
  @IsString()
  memory?: string;

  @IsOptional()
  @IsString()
  baseFrequency?: string;

  @IsOptional()
  @IsString()
  memoryFrequency?: string;

  @IsOptional()
  @IsPositive()
  @IsInt()
  wattage?: number;

  @IsOptional()
  @IsString()
  interface?: string;

  @ValidateIf((o) => o.image !== undefined)
  @IsUrl()
  image?: string;

  @ValidateIf((o) => o.url !== undefined)
  @IsUrl()
  url?: string;

  @IsOptional()
  @IsString()
  price?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  categoryId?: number;
}
