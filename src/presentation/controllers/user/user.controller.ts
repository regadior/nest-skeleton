import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserUseCase } from '../../../application/user/create-user.usecase';
import { CreateUserBodyDto } from '../../../application/user/dto/create-user-body.dto';

@Controller('/users')
@ApiTags('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: 'CreateCandidateResponse',
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  createUser(@Body() createUserBody: CreateUserBodyDto) {
    return this.createUserUseCase.execute(createUserBody);
  }
}
