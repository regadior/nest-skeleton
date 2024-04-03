import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { BaseResponse } from '@application/common/base.response';
import { PaginationOutput } from '@domain/common/pagination-output';
import { User } from '@domain/user/user';

@Injectable()
export class UsersResponse extends BaseResponse {
  @ApiProperty()
  readonly pagination: PaginationOutput;

  @ApiProperty()
  readonly data?: User[];

  constructor(
    status: string,
    message: string,
    pagination: PaginationOutput,
    data?: User[],
  ) {
    super(status, message);
    this.pagination = pagination;
    this.data = data;
  }
}
