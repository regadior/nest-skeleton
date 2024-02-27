import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { User } from '@domain/user/user';

@Injectable()
export class LoginUserResponse {
  @ApiProperty()
  readonly status: string;

  @ApiProperty()
  readonly message: string;

  @ApiProperty()
  readonly data: {
    user: User;
    accessToken: string;
  };

  constructor(
    status: string,
    message: string,
    user: User,
    accessToken: string,
  ) {
    this.status = status;
    this.message = message;
    this.data = { user, accessToken };
  }
}
