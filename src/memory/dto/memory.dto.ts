import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUrl,
  IsPositive,
  ValidateIf,
  IsInt,
} from 'class-validator';

export class CreateMemoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  frequency: string;

  // @IsNotEmpty()
  // @IsString()
  // setnumber: string;

  @IsNotEmpty()
  @IsString()
  interface: string;

  @IsOptional()
  @IsUrl()
  image?: string;

  @IsOptional()
  @IsUrl()
  url?: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  categoryId: number;
}

export class UpdateMemoryDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  type?: string;

  // @IsOptional()
  // @IsString()
  // setnumber?: string;

  @IsOptional()
  @IsString()
  frequency?: string;

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
