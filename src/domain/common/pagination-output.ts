import { ApiProperty } from '@nestjs/swagger';

class PaginationOutput {
  @ApiProperty()
  pageNumber: number;

  @ApiProperty()
  pageSize: number;

  @ApiProperty()
  count: number;

  @ApiProperty()
  elementsFound: number;

  constructor(
    pageNumber: number,
    pageSize: number,
    count: number,
    elementsFound: number,
  ) {
    this.pageNumber = pageNumber;
    this.pageSize = pageSize;
    this.count = count;
    this.elementsFound = elementsFound;
  }
}

export { PaginationOutput };
