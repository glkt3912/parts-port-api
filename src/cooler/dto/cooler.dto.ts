import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUrl,
  IsInt,
  IsPositive,
  ValidateIf,
  IsNumberString,
} from 'class-validator';

export class CreateCoolerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsInt()
  wattage: number;

  @IsNotEmpty()
  @IsString()
  coolingType: string;

  @IsNotEmpty()
  @IsInt()
  fanCount: number;

  @IsNotEmpty()
  @IsString()
  airFlow: string;

  @IsNotEmpty()
  @IsString()
  size: string;

  @IsNotEmpty()
  @IsString()
  socket: string;

  @IsOptional()
  @IsUrl()
  image?: string;

  @IsOptional()
  @IsUrl()
  url?: string;

  @IsOptional()
  @IsNumberString()
  price?: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  categoryId: number;

  @IsOptional()
  @IsString()
  lighting?: string;
}

export class UpdateCoolerDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsInt()
  wattage?: number;

  @IsOptional()
  @IsString()
  coolingType?: string;

  @IsOptional()
  @IsInt()
  fanCount?: number;

  @IsOptional()
  @IsString()
  airFlow?: string;

  @IsOptional()
  @IsString()
  size?: string;

  @IsOptional()
  @IsString()
  socket?: string;

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

  @IsOptional()
  @IsString()
  lighting?: string;
}
