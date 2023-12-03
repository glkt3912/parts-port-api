import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  IsUrl,
  IsPositive,
  ValidateIf,
} from 'class-validator';

export class CreateMotherBoardDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  chip: string;

  @IsNotEmpty()
  @IsString()
  formFactor: string;

  @IsNotEmpty()
  @IsString()
  memoryType: string;

  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  memorySlots: number;

  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  maxMemory: number;

  @IsNotEmpty()
  @IsString()
  socket: string;

  @IsNotEmpty()
  @IsString()
  pciSlots: string;

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

export class UpdateMotherBoardDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  chip?: string;

  @IsOptional()
  @IsString()
  formFactor?: string;

  @IsOptional()
  @IsString()
  memoryType?: string;

  @IsOptional()
  @IsPositive()
  @IsInt()
  memorySlots?: number;

  @IsOptional()
  @IsPositive()
  @IsInt()
  maxMemory?: number;

  @IsOptional()
  @IsString()
  socket?: string;

  @IsOptional()
  @IsString()
  pciSlots?: string;

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
