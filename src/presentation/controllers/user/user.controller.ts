import {
  Body,
  Controller,
  Delete,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserUseCase } from '../../../application/user/create-user.usecase';
import { DeleteUserByIdUseCase } from '../../../application/user/delete-user-by-id.usecase';
import { CreateUserBodyDto } from '../../../application/user/request/dto/create-user-body.dto';
import { UpdateUserBodyDto } from '../../../application/user/request/dto/update-user-body.dto';
import { UserResponse } from '../../../application/user/response/user.response';
import { UpdateUserByIdUseCase } from '../../../application/user/update-user-by-id.usecase';

@Controller('/users')
@ApiTags('users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly deleteUserByIdUseCase: DeleteUserByIdUseCase,
    private readonly updateUserByIdUseCase: UpdateUserByIdUseCase,
  ) {}

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

  @Patch('/:userId')
  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({
    status: 200,
    description: 'User updated successfully',
    type: UserResponse,
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  updateUser(
    @Body() updateUserBody: UpdateUserBodyDto,
    @Param('userId', new ParseUUIDPipe()) userId: string,
  ) {
    return this.updateUserByIdUseCase.execute(userId, updateUserBody);
  }

  @Delete('/:userId')
  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({
    status: 204,
    description: 'User deleted successfully',
    type: UserResponse,
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  deleteUser(@Param('userId', new ParseUUIDPipe()) userId: string) {
    return this.deleteUserByIdUseCase.execute(userId);
  }
}
