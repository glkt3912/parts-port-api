import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  isString,
} from 'class-validator';
export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string;
}
