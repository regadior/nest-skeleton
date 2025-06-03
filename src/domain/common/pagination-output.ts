import { ApiProperty } from '@nestjs/swagger';

export class PaginationOutput {
  @ApiProperty()
  pageNumber: number;

  @ApiProperty()
  pageSize: number;

  @ApiProperty()
  count: number;

  @ApiProperty()
  total: number;

  constructor(
    pageNumber: number,
    pageSize: number,
    count: number,
    total: number,
  ) {
    this.pageNumber = pageNumber;
    this.pageSize = pageSize;
    this.count = count;
    this.total = total;
  }
}
