import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { User } from '../../../domain/user/user';

@Injectable()
export class UserResponse {
  @ApiProperty()
  readonly status: string;

  @ApiProperty()
  readonly message: string;

  @ApiProperty()
  readonly data?: User;

  constructor(status: string, message: string, data?: User) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}
