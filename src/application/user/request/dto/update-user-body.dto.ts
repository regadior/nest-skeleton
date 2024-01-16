import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserBodyDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  lastName?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  username?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(50)
  email?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  password?: string;
}
