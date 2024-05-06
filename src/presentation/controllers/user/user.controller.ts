import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserUseCase } from '@application/user/create-user.usecase';
import { DeleteUserByIdUseCase } from '@application/user/delete-user-by-id.usecase';
import { CreateUserBodyDto } from '@application/user/dto/create-user-body.dto';
import { UpdateUserBodyDto } from '@application/user/dto/update-user-body.dto';
import { FindAllUsersUseCase } from '@application/user/find-all-users.usecase';
import { GetUserByIdUseCase } from '@application/user/get-user-by-id.usecase';
import { GetAllUsersQuery } from '@application/user/query/get-all-users.query';
import { UserResponse } from '@application/user/response/user.response';
import { UpdateUserByIdUseCase } from '@application/user/update-user-by-id.usecase';

@Controller('/users')
@ApiTags('Users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly deleteUserByIdUseCase: DeleteUserByIdUseCase,
    private readonly updateUserByIdUseCase: UpdateUserByIdUseCase,
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
    private readonly findAllUsersUseCase: FindAllUsersUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: UserResponse,
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  createUser(@Body() data: CreateUserBodyDto) {
    return this.createUserUseCase.execute(data);
  }

  @Get('?')
  @ApiOperation({ summary: 'Return users that matches input query' })
  @ApiResponse({
    status: 200,
    description: 'Users list',
    type: UserResponse,
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  getCandidates(@Query() query: GetAllUsersQuery) {
    return this.findAllUsersUseCase.execute(query);
  }

  @Get('/:userId')
  @ApiOperation({ summary: 'Get user by Id' })
  @ApiResponse({
    status: 200,
    description: 'User successfully obtained',
    type: UserResponse,
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  getUserById(@Param('userId', new ParseUUIDPipe()) userId: string) {
    return this.getUserByIdUseCase.execute(userId);
  }

  @Patch('/:userId')
  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({
    status: 200,
    description: 'User successfully updated',
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
    status: 200,
    description: 'User deleted ',
    type: UserResponse,
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  deleteUser(@Param('userId', new ParseUUIDPipe()) userId: string) {
    return this.deleteUserByIdUseCase.execute(userId);
  }
}
