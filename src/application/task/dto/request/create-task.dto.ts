import { TaskStatusEnum } from '@domain/task/task-status.enum';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(TaskStatusEnum)
  status: TaskStatusEnum;
}
