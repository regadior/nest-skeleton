import { TaskResponse } from '@application/task/response/task.response';
import { TaskRepository } from '@domain/task/task.repository';
import { HttpStatus, NotFoundException } from '@nestjs/common';

export class DeleteTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}
  public async execute({ taskId }: { taskId: number }): Promise<TaskResponse> {
    const task = await this.taskRepository.deleteById(taskId);
    if (!task) throw new NotFoundException('Task not found');
    return new TaskResponse(HttpStatus.NO_CONTENT, 'Success');
  }
}
