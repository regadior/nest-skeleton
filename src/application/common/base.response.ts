import { ApiProperty } from '@nestjs/swagger';

class BaseResponse<T> {
  @ApiProperty()
  readonly statusCode: number;

  @ApiProperty()
  readonly message: string;

  @ApiProperty()
  readonly data?: T;

  constructor(statusCode: number, message: string, data?: T) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

export { BaseResponse };
