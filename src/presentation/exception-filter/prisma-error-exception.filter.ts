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
        const fields = this.getFieldsWithValues(
          exception.meta?.target,
          request,
        );
        message = `Following fields already exist in the database,${fields}`;
        break;
      }
      default: {
        status = HttpStatus.INTERNAL_SERVER_ERROR;
        message = 'Error in database while processing the request';
        break;
      }
    }
    const responseBody = new BaseResponse(status, message);
    response.status(status).json(responseBody);
  }

  private getFieldsWithValues(targets: any, request: any): string {
    const values: any = request.body;
    const fieldsWithValues: string[] = [];
    console.log(targets);
    targets.forEach((target: string) => {
      if (target in values) {
        fieldsWithValues.push(`'${target}: ${values[target]}'`);
      }
    });
    return fieldsWithValues.join(' and ');
  }
}
