import { PaginationInput } from './pagination-input';
import { PaginationOutput } from './pagination-output';

export class FindQueryResult<T> {
  result: T[];

  pagination: PaginationOutput;

  constructor(result: T[], total: number, pagination: PaginationInput) {
    this.result = result;
    this.pagination = new PaginationOutput(
      pagination.pageNumber,
      pagination.pageSize,
      result.length,
      total,
    );
  }
}
