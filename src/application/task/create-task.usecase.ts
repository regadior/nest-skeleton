import { CreateTaskDto } from '@application/task/dto/request/create-task.dto';
import { TaskMapper } from '@application/task/mapper/task.mapper';
import type { TaskRepository } from '@domain/task/task.repository';
import { HttpStatus } from '@nestjs/common';
import { TaskResponse } from './response/task.response';
export class CreateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}
  public async execute({
    data,
    userId,
  }: {
    data: CreateTaskDto;
    userId: string;
  }): Promise<TaskResponse> {
    const task = await this.taskRepository.create({
      ...data,
      createdAt: new Date(),
      userId,
    });
    const response = TaskMapper.toResponse(task);
    return new TaskResponse(HttpStatus.CREATED, 'Success', response);
  }
}
