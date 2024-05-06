import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

interface Field {
  field: string;
  value: string;
}

@Catch(PrismaClientKnownRequestError)
export class PrismaErrorExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    let statusCode: number;
    let message: string;
    let fields: Field[] = [];
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (exception.code) {
      case 'P2002': {
        statusCode = HttpStatus.CONFLICT;
        fields = this.getFieldsWithValues(exception.meta?.target, request.body);
        message = `Duplicated key value violates unique constraint.`;
        break;
      }
      default: {
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        message = exception.message;
        break;
      }
    }
    response.status(statusCode).json({ statusCode, message, fields });
  }

  private getFieldsWithValues(targets: any, requestBody: any): Field[] {
    const fieldsWithValues: any[] = [];
    targets.forEach((target: string) => {
      if (target in requestBody) {
        fieldsWithValues.push({ field: target, value: requestBody[target] });
      }
    });
    return fieldsWithValues;
  }
}
