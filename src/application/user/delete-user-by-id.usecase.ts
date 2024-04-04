import { HttpStatus } from '@nestjs/common';

import { UserRepository } from '@domain/user/user.repository';

import { UserResponse } from './response/user.response';

export class DeleteUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(userId: string): Promise<UserResponse> {
    const user = await this.userRepository.delete(userId);
    return new UserResponse(
      HttpStatus.OK,
      `Successfully deleted user with id ${user.id}`,
      user,
    );
  }
}
