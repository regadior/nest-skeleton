import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';

import { FindUserQueryFilter } from '@domain/user/query/find-user-query.filter';

import { UserRepository } from '../../domain/user/user.repository';
import { UserResponse } from './response/user.response';

@Injectable()
export class GetUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(userId: string): Promise<UserResponse> {
    const userQueryFilter = new FindUserQueryFilter({ id: userId });
    const user = await this.userRepository.getBy(userQueryFilter);
    if (!user)
      throw new NotFoundException(`User with id ${userId} userId not found`);
    return new UserResponse(
      HttpStatus.OK.toString(),
      'User successfully obtained',
      user,
    );
  }
}
