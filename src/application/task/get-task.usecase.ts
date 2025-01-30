import { TaskMapper } from '@application/task/mapper/task.mapper';
import type { TaskRepository } from '@domain/task/task.repository';
import { HttpStatus, NotFoundException } from '@nestjs/common';
import { TaskResponse } from './response/task.response';
export class GetTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}
  public async execute({ taskId }: { taskId: number }): Promise<TaskResponse> {
    const task = await this.taskRepository.getById(taskId);
    if (!task) throw new NotFoundException('Post not found');
    const response = TaskMapper.toResponse(task);
    return new TaskResponse(HttpStatus.OK, 'Success', response);
  }
}
