import { PAGE_NUMBER_DEFAULT, PAGE_SIZE_DEFAULT } from './constants';

class PaginationInput {
  pageSize: number;

  pageNumber: number;

  constructor(pageSize?: number, pageNumber?: number) {
    this.pageSize = pageSize || PAGE_SIZE_DEFAULT;
    this.pageNumber = pageNumber || PAGE_NUMBER_DEFAULT;
  }
}

export { PaginationInput };
