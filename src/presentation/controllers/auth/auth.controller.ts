import { LoginDto } from '@application/auth/dto/login.dto';
import { LoginUseCase } from '@application/auth/login.usecase';
import { LoginResponse } from '@application/auth/response/login.response';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from '@presentation/authz/decorators/public.decorator';

@Controller('auth')
@ApiTags('Auth')
@UsePipes(new ValidationPipe({ transform: true }))
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}
  @Post('login')
  @ApiOperation({ summary: 'Login with user credentials' })
  @ApiResponse({
    status: 200,
    description: 'Login with user successfully',
  })
  @Public()
  login(@Body() data: LoginDto): Promise<LoginResponse> {
    return this.loginUseCase.execute(data);
  }
}
