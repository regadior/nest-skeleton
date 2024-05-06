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
    statusCode: number,
    message: string,
    pagination: PaginationOutput,
    data?: User[],
  ) {
    super(statusCode, message, data);
    this.pagination = pagination;
  }
}
