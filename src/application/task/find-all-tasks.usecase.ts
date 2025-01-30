import { TaskMapper } from '@application/task/mapper/task.mapper';
import { GetAllTasksQuery } from '@application/task/query/get-all-users.query';
import { FindAllTasksResponse } from '@application/task/response/find-all-tasks.response';
import { PaginationInput } from '@domain/common/pagination-input';
import { TaskQueryFilter } from '@domain/task/task-query-filter';
import type { TaskRepository } from '@domain/task/task.repository';
import { HttpStatus } from '@nestjs/common';
export class FindAllTasksUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}
  public async execute(query: GetAllTasksQuery): Promise<FindAllTasksResponse> {
    const { pageSize, pageNumber } = query;
    const candidateQueryFilter = new TaskQueryFilter(query);
    const paginationInput = new PaginationInput(pageSize, pageNumber);
    const { result, pagination } = await this.taskRepository.findAll(
      paginationInput,
      candidateQueryFilter,
    );

    const response = result.map((result) => TaskMapper.toResponse(result));

    return new FindAllTasksResponse(
      HttpStatus.OK,
      'Success',
      pagination,
      response,
    );
  }
}
