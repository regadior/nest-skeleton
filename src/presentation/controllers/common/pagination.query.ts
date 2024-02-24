/* eslint-disable import/no-extraneous-dependencies */
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsInt } from 'class-validator';

import {
  PAGE_NUMBER_DEFAULT,
  PAGE_SIZE_DEFAULT,
} from '@domain/common/constants';

class PaginationQuery {
  @ApiProperty({ required: false })
  @Type(() => Number)
  @Transform(({ value }) => Number.parseInt(value))
  @IsInt()
  pageSize?: number = PAGE_SIZE_DEFAULT;

  @ApiProperty({ required: false })
  @Transform(({ value }) => Number.parseInt(value))
  @Type(() => Number)
  @IsInt()
  pageNumber?: number = PAGE_NUMBER_DEFAULT;
}

export { PaginationQuery };
