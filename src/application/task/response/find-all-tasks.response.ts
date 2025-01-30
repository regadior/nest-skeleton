import { BaseResponse } from '@application/common/base.response';
import { TaskResponseDto } from '@application/task/dto/response/task-response.dto';
import { PaginationOutput } from '@domain/common/pagination-output';
import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class FindAllTasksResponse extends BaseResponse<TaskResponseDto[]> {
  @ApiProperty()
  readonly statusCode: number;

  @ApiProperty()
  readonly message: string;

  @ApiProperty()
  readonly pagination: PaginationOutput;

  @ApiProperty()
  readonly data?: TaskResponseDto[];

  constructor(
    statusCode: number,
    message: string,
    pagination: PaginationOutput,
    data?: TaskResponseDto[],
  ) {
    super(statusCode, message, data);
    this.pagination = pagination;
  }
}
