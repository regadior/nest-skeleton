import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class ServiceErrorExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exception.message;
    response.status(status).json({
      statusCode: status,
      error: HttpStatus[status],
      message: message,
    });
  }
}
