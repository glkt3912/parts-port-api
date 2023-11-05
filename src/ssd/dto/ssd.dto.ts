import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUrl,
  IsInt,
  IsPositive,
  ValidateIf,
} from 'class-validator';

export class CreateSsdDto {
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
  interface: string;

  @IsNotEmpty()
  @IsString()
  ssdtype: string;

  @IsNotEmpty()
  @IsString()
  partNumber: string;

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

export class UpdateSsdDto {
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsString()
  brand?: string;

  @IsNotEmpty()
  @IsString()
  capacity?: string;

  @IsNotEmpty()
  @IsString()
  size?: string;

  @IsNotEmpty()
  @IsString()
  interface?: string;

  @IsNotEmpty()
  @IsString()
  ssdtype?: string;

  @IsNotEmpty()
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

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  categoryId?: number;
}
