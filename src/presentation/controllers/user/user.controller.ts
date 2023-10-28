import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserUseCase } from '../../../application/user/create-user.usecase';
import { CreateUserBodyDto } from '../../../application/user/request/dto/create-user-body.dto';
import { UserResponse } from '../../../application/user/response/user.response';

@Controller('/users')
@ApiTags('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: UserResponse,
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  createUser(@Body() createUserBody: CreateUserBodyDto) {
    return this.createUserUseCase.execute(createUserBody);
  }
}
