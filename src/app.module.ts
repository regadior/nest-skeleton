import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { LoggerModule } from 'nestjs-pino';
// eslint-disable-next-line unicorn/import-style
import { resolve } from 'path';
import * as rfs from 'rotating-file-stream';

import { PrismaErrorExceptionFilter } from '@presentation/exception-filter/prisma-error-exception.filter';

import { UserModule } from './presentation/modules/user.module';

const isProduction = process.env.TARGET_ENV === 'prod';

const customFileName = (time: any) => {
  if (time === null) {
    time = '';
    return `app-log${time}.log`;
  } else {
    const date = new Date(time).toISOString().slice(0, 16);
    return `app-log-${date}.log`;
  }
};
const loggerConfig = {
  pinoHttp: {
    redact: isProduction ? ['req.headers.authorization'] : undefined,
    ...(isProduction
      ? {
          stream: rfs.createStream(customFileName, {
            interval: String(process.env.INTERVAL_LOGS) || '1d',
            path: resolve(__dirname, '..', 'logs'),
            intervalBoundary: true,
            intervalUTC: true,
            mode: 0o777,
            maxFiles: 30,
          }),
        }
      : {
          transport: {
            target: 'pino-pretty',
          },
        }),
  },
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LoggerModule.forRoot(loggerConfig),
    UserModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: PrismaErrorExceptionFilter,
    },
  ],
})
export class AppModule {}
