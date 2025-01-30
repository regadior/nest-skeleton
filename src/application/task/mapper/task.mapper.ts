import { TaskResponseDto } from '@application/task/dto/response/task-response.dto';
import { Task } from '@domain/task/task.model';

export class TaskMapper {
  static toResponse(task: Task): TaskResponseDto {
    return new TaskResponseDto(task);
  }
}
