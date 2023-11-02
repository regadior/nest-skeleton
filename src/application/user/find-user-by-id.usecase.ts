import { HttpStatus } from '@nestjs/common';

import { UserRepository } from '../../domain/user/user.repository';
import { UserResponse } from './response/user.response';

export class FindUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(userId: string): Promise<UserResponse> {
    const createdUser = await this.userRepository.findById(userId);
    return new UserResponse(
      HttpStatus.CREATED.toString(),
      'Successfully created user',
      createdUser,
    );
  }
}
