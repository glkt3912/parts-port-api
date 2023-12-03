import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUrl,
  IsInt,
  IsPositive,
  ValidateIf,
} from 'class-validator';

export class CreateHddDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  capacity: string;

  @IsNotEmpty()
  @IsString()
  size: string;

  @IsNotEmpty()
  @IsString()
  speed: string;

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

export class UpdateHddDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  series?: string;

  @IsOptional()
  @IsString()
  capacity?: string;

  @IsOptional()
  @IsString()
  speed?: string;

  @IsOptional()
  @IsString()
  interface?: string;

  @IsOptional()
  @IsString()
  cache?: string;

  @IsOptional()
  @IsString()
  partNumber?: string;

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
