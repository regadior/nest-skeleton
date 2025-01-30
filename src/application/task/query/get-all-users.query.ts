import { PaginationQuery } from '@application/common/pagination.query';
import { TaskStatusEnum } from '@domain/task/task-status.enum';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export class GetAllTasksQuery extends PaginationQuery {
  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsEnum(TaskStatusEnum)
  @IsOptional()
  status?: TaskStatusEnum;
}
