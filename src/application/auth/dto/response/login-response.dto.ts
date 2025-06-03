import { UserResponseDto } from '@application/user/dto/user-response.dto';
import { TaskStatusEnum } from '@domain/task/task-status.enum';
import { ApiProperty } from '@nestjs/swagger';
export class TaskResponseDto {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  status: TaskStatusEnum;

  @ApiProperty({ type: UserResponseDto })
  user: UserResponseDto;

  @ApiProperty()
  createdAt?: Date;

  @ApiProperty()
  updatedAt?: Date;

  constructor(input: UserResponseInputData) {
    this.id = input.id;
    this.description = input.description;
    this.status = input.status;
    this.user = new UserResponseDto(input.user);
    this.createdAt = input.createdAt;
    this.updatedAt = input.updatedAt;
  }
}

export interface UserResponseInputData {
  id?: number;
  description: string;
  status: TaskStatusEnum;
  user: UserResponseDto;
  createdAt?: Date;
  updatedAt?: Date;
}
