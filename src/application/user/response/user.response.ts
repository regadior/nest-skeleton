import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { BaseResponse } from '@application/common/base.response';
import { User } from '@domain/user/user';

@Injectable()
export class UserResponse extends BaseResponse {
  @ApiProperty()
  readonly data?: User;

  constructor(status: string, message: string, data?: User) {
    super(status, message);
    this.data = data;
  }
}
