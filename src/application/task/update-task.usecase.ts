import { TaskMapper } from '@application/task/mapper/task.mapper';
import { TaskResponse } from '@application/task/response/task.response';
import { TaskRepository } from '@domain/task/task.repository';
import { HttpStatus } from '@nestjs/common';

export class UpdateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}
  async execute(data: UpdateTaskDto): Promise<TaskResponse> {
    const task = await this.taskRepository.update(data);
    const response = TaskMapper.toResponse(task);
    return new TaskResponse(HttpStatus.NO_CONTENT, 'Success', response);
  }
}
interface UpdateTaskDto {
  id: number;
  description?: string;
  status?: any;
}
