import { FindQueryResult } from '@domain/common/find-query-result';
import { PaginationInput } from '@domain/common/pagination-input';
import { TaskQueryFilter } from '@domain/task/task-query-filter';
import { Task } from '@domain/task/task.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class TaskRepository {
  abstract create(data: CreateTaskData): Promise<Task>;
  abstract update(data: UpdateTaskData): Promise<Task>;
  abstract getById(id: number): Promise<Task | null>;
  abstract findAll(
    pagination: PaginationInput,
    query: TaskQueryFilter,
  ): Promise<FindQueryResult<Task>>;
  abstract deleteById(id: number): Promise<Task | null>;
}

export interface CreateTaskData {
  description: string;
  status: any;
  createdAt: Date;
  userId: string;
}
export interface UpdateTaskData {
  id: number;
  description?: string;
  status?: any;
}
