import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { LoggerModule } from 'nestjs-pino';
// eslint-disable-next-line unicorn/import-style
import { resolve } from 'path';

import { PrismaErrorExceptionFilter } from '@presentation/exception-filter/prisma-error-exception.filter';

import { UserModule } from './presentation/modules/user.module';

const isProduction = process.env.TARGET_ENV === 'prod';
const pinoFile = {
  target: 'pino/file',
  options: {
    destination: resolve(
      __dirname,
      '..',
      'logs',
      `app-log-${new Date().toISOString().slice(0, 10)}.log`,
    ),
    prettyPrint: true,
    rotate: {
      interval: '1d',
      compress: true,
      keepFileExt: true,
    },
  },
};
const loggerConfig = {
  pinoHttp: {
    redact: isProduction ? ['req.headers.authorization'] : undefined,
    transport: {
      targets: [
        ...(isProduction ? [pinoFile] : [{ target: 'pino-pretty' }, pinoFile]),
      ],
    },
  },
};

@Module({
  imports: [
    ConfigModule.forRoot(),
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
