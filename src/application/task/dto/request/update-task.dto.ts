import { TaskStatusEnum } from '@domain/task/task-status.enum';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description?: string;

  @IsNotEmpty()
  @IsEnum(TaskStatusEnum)
  @IsOptional()
  status?: TaskStatusEnum;
}
