import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { BaseResponse } from '@application/common/base.response';
import { PaginationOutput } from '@domain/common/pagination-output';
import { User } from '@domain/user/user';

@Injectable()
export class UsersResponse extends BaseResponse<User[]> {
  @ApiProperty()
  readonly pagination: PaginationOutput;

  @ApiProperty()
  readonly data?: User[];

  constructor(
    status: number,
    message: string,
    pagination: PaginationOutput,
    data?: User[],
  ) {
    super(status, message, data);
    this.pagination = pagination;
  }
}
