import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { TypeOrmErrorExceptionFilter } from '../exception-filter/type-orm-error-exception.filter';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: TypeOrmErrorExceptionFilter,
    },
  ],
})
export class ExceptionHandlerModule {}
