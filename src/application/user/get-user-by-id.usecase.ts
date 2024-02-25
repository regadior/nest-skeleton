import { HttpStatus, NotFoundException } from '@nestjs/common';

import { UserRepository } from '../../domain/user/user.repository';
import { UserResponse } from './response/user.response';

export class GetUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(userId: string): Promise<UserResponse> {
    const user = await this.userRepository.getById(userId);
    if (!user)
      throw new NotFoundException(`User with id ${userId} userId not found`);
    return new UserResponse(
      HttpStatus.OK.toString(),
      'User successfully obtained',
      user,
    );
  }
}
