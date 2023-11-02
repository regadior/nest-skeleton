import { HttpStatus } from '@nestjs/common';

import { UserRepository } from '../../domain/user/user.repository';
import { UserResponse } from './response/user.response';

export class DeleteUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(userId: string): Promise<UserResponse> {
    await this.userRepository.delete(userId);
    return new UserResponse(
      HttpStatus.NO_CONTENT.toString(),
      'Successfully deleted user',
    );
  }
}
