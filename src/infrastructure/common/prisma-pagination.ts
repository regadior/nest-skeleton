import { PaginationInput } from '../../domain/common/pagination-input';

class PrismaPagination {
  skip: number;

  take: number;

  constructor(pagination: PaginationInput) {
    this.skip = (pagination.pageNumber - 1) * pagination.pageSize;
    this.take = pagination.pageSize;
  }
}

export { PrismaPagination };
