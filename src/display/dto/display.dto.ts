import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUrl,
  IsNumberString,
  IsInt,
  IsPositive,
  ValidateIf,
} from 'class-validator';

export class CreateDisplayDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  size: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  speed: string;

  @IsNotEmpty()
  @IsString()
  resolution: string;

  @IsOptional()
  @IsString()
  contrast?: string;

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
}

export class UpdateDisplayDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  size?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  speed?: string;

  @IsOptional()
  @IsString()
  resolution?: string;

  @IsOptional()
  @IsString()
  contrast?: string;

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
