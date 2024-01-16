import { HttpStatus } from '@nestjs/common';

import { UserRepository } from '@domain/user/user.repository';

import { UserResponse } from './response/user.response';

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(data: any): Promise<UserResponse> {
    const createdUser = await this.userRepository.create(data);
    return new UserResponse(
      HttpStatus.CREATED.toString(),
      `Successfully created user with id ${createdUser.id}`,
      createdUser,
    );
  }
}
