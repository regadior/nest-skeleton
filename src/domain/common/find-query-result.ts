import { PaginationInput } from './pagination-input';
import { PaginationOutput } from './pagination-output';

class FindQueryResult<T> {
  result: T[];

  pagination: PaginationOutput;

  constructor(result: T[], elementsFound: number, pagination: PaginationInput) {
    this.result = result;
    this.pagination = new PaginationOutput(
      pagination.pageNumber,
      pagination.pageSize,
      result.length,
      elementsFound,
    );
  }
}

export { FindQueryResult };
