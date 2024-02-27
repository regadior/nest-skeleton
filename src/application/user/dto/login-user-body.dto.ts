import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserBodyDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
