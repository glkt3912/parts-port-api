import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  ValidateIf,
} from 'class-validator';

export class CreateCpuDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  processor: string;

  @IsNotEmpty()
  @IsString()
  socket: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  wattage: number;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  core: number;

  @IsNotEmpty()
  @IsString()
  baseFrequency: string;

  @IsNotEmpty()
  @IsString()
  boostedFrequency: string;

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
  categoryId: number;
}

export class UpdateCpuDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  processor?: string;

  @IsOptional()
  @IsString()
  socket?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  wattage?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  core?: number;

  @IsOptional()
  @IsString()
  baseFrequency?: string;

  @IsOptional()
  @IsString()
  boostedFrequency?: string;

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
