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

export class CreatePcCaseDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  formFactor: string;

  @IsNotEmpty()
  @IsString()
  weight: string;

  @IsNotEmpty()
  @IsString()
  size: string;

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

export class UpdatePcCaseDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  formFactor?: string;

  @IsOptional()
  @IsString()
  weight?: string;

  @IsNotEmpty()
  @IsString()
  size?: string;

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
