import { HttpStatus } from '@nestjs/common';

import { HasherService } from '@domain/shared/services/hasher.service';
import { UserRepository } from '@domain/user/user.repository';

import { UserResponse } from './response/user.response';

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hasherService: HasherService,
  ) {}

  public async execute(userdata: any): Promise<UserResponse> {
    const dataWithHashedPassword = {
      ...userdata,
      password: await this.hasherService.hash(userdata.password),
    };
    const createdUser = await this.userRepository.create(
      dataWithHashedPassword,
    );
    return new UserResponse(
      HttpStatus.CREATED.toString(),
      `Successfully created user with id ${createdUser.id}`,
      createdUser,
    );
  }
}
