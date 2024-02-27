import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';

import { JwtRepository } from '@domain/jwt/jwt.repository';
import { FindUserQueryFilter } from '@domain/user/query/find-user-query.filter';
import { UserRepository } from '@domain/user/user.repository';

import { LoginUserBodyDto } from './dto/login-user-body.dto';
import { LoginUserResponse } from './response/login-user.response';

@Injectable()
export class LoginUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtRepository: JwtRepository,
  ) {}

  public async execute(data: LoginUserBodyDto): Promise<LoginUserResponse> {
    const userQueryFilter = new FindUserQueryFilter({ email: data.email });
    const user = await this.userRepository.getBy(userQueryFilter);
    if (!user)
      throw new NotFoundException(`User with email ${data.email} not found`);
    const token = await this.jwtRepository.encode(user);
    return new LoginUserResponse(
      HttpStatus.OK.toString(),
      `Successfully logged user with email ${user.email}`,
      user,
      token,
    );
  }
}
