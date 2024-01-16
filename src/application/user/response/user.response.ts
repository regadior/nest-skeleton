import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class UserResponse {
  @ApiProperty()
  readonly status: string;

  @ApiProperty()
  readonly message: string;

  @ApiProperty()
  readonly data: any;

  constructor(status: string, message: string, data: any) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}
