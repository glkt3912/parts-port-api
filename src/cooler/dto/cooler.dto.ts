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

export class CreateCoolerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  intel: string;

  @IsNotEmpty()
  @IsString()
  amd: string;

  @IsNotEmpty()
  @IsString()
  flowtype: string;

  @IsNotEmpty()
  @IsString()
  noise: string;

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
  @IsNumberString()
  price?: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  categoryId: number;
}

export class UpdateCoolerDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  intel?: string;

  @IsOptional()
  @IsString()
  amd?: string;

  @IsOptional()
  @IsString()
  flowtype?: string;

  @IsOptional()
  @IsString()
  noise?: string;

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
