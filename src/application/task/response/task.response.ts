import { BaseResponse } from '@application/common/base.response';
import { TaskResponseDto } from '@application/task/dto/response/task-response.dto';
import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class TaskResponse extends BaseResponse<any> {
  @ApiProperty()
  readonly statusCode: number;

  @ApiProperty()
  readonly message: string;

  @ApiProperty()
  readonly data?: TaskResponseDto;

  constructor(statusCode: number, message: string, data?: TaskResponseDto) {
    super(statusCode, message, data);
  }
}
