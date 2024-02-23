import { IsOptional, IsString } from 'class-validator';

export class UpdateUserBodyDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  password: string;
}
