import { HttpStatus } from '@nestjs/common';

import { UserRepository } from '../../domain/user/user.repository';
import { UpdateUserBodyDto } from './request/dto/update-user-body.dto';
import { UserResponse } from './response/user.response';

export class UpdateUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(
    userId: string,
    userData: UpdateUserBodyDto,
  ): Promise<UserResponse> {
    // const updatedUser =
    await this.userRepository.update(userId, userData);
    return new UserResponse(
      HttpStatus.OK.toString(),
      'Successfully updated user',
      // updatedUser,
    );
  }
}
