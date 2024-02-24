import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { PaginationOutput } from '@domain/common/pagination-output';
import { User } from '@domain/user/user';

@Injectable()
export class UsersResponse {
  @ApiProperty()
  readonly status: string;

  @ApiProperty()
  readonly message: string;

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
    this.status = status;
    this.message = message;
    this.pagination = pagination;
    this.data = data;
  }
}
