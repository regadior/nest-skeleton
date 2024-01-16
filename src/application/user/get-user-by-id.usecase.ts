import { HttpStatus } from '@nestjs/common';

import { UserRepository } from '../../domain/user/user.repository';
import { UserResponse } from './response/user.response';

export class GetUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(userId: string): Promise<UserResponse> {
    const user = await this.userRepository.findById(userId);
    return new UserResponse(
      HttpStatus.OK.toString(),
      'Successfully got user',
      user,
    );
  }
}
