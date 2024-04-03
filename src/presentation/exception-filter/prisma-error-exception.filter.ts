import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { BaseResponse } from '@application/common/base.response';

@Catch(PrismaClientKnownRequestError)
export class PrismaErrorExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    let status: number;
    let message: string;
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (exception.code) {
      case 'P2002': {
        status = HttpStatus.CONFLICT;
        const fields = this.getFieldsWithValues(exception, request);
        message = `Following fields already exist in the database with the following values: '${fields}'`;
        break;
      }
      default: {
        status = HttpStatus.INTERNAL_SERVER_ERROR;
        message = 'Error processing the request';
        break;
      }
    }
    const responseBody = new BaseResponse(status.toString(), message);
    response.status(status).json(responseBody);
  }

  private getFieldsWithValues(
    exception: PrismaClientKnownRequestError,
    request: any,
  ): string {
    const fields =
      exception.meta && Array.isArray(exception.meta.target)
        ? exception.meta.target
        : [];
    const values: any = request.body;
    const fieldsWithValues: string[] = [];
    fields.forEach((field) => {
      if (field in values) {
        fieldsWithValues.push(`${field}: ${values[field]}`);
      }
    });
    return fieldsWithValues.join(', ');
  }
}
