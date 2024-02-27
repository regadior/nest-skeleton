import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UserRepository } from '@domain/user/user.repository';

import { CreateUserBodyDto } from './dto/create-user-body.dto';
import { UserResponse } from './response/user.response';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(data: CreateUserBodyDto): Promise<UserResponse> {
    data.password = await bcrypt.hash(data.password, 10);

    const createdUser = await this.userRepository.create(data);
    return new UserResponse(
      HttpStatus.CREATED.toString(),
      `Successfully created user with id ${createdUser.id}`,
      createdUser,
    );
  }
}
