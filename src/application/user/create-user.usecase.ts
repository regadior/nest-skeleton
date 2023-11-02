import { HttpStatus } from '@nestjs/common';

import { UserRepository } from '../../domain/user/user.repository';
import { CreateUserBodyDto } from './request/dto/create-user-body.dto';
import { UserResponse } from './response/user.response';

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(userData: CreateUserBodyDto): Promise<UserResponse> {
    const createdUser = await this.userRepository.create(userData);
    return new UserResponse(
      HttpStatus.CREATED.toString(),
      'Successfully created user',
      createdUser,
    );
  }
}
