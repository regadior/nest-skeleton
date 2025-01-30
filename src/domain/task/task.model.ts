import { TaskStatusEnum } from '@domain/task/task-status.enum';
import { User } from '@domain/user/user.model';
import { ApiProperty } from '@nestjs/swagger';

export class Task {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  status: TaskStatusEnum;

  @ApiProperty({ type: User })
  user: User;

  @ApiProperty()
  createdAt?: Date;

  @ApiProperty()
  updatedAt?: Date;

  constructor(input: TaskInputData) {
    this.id = input.id;
    this.description = input.description;
    this.status = input.status;
    this.user = new User(input.user);
    this.createdAt = input.createdAt;
    this.updatedAt = input.updatedAt;
  }
}
export interface TaskInputData {
  id?: number;
  description?: string;
  status?: TaskStatusEnum;
  user: User;
  createdAt?: Date;
  updatedAt?: Date;
}
