import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { LoggerModule } from 'nestjs-pino';

import { ExceptionHandlerModule } from './exception-handler.module';
import { UserModule } from './user.module';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot(),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
        },
      },
    }),
    ExceptionHandlerModule,
    UserModule,
  ],
})
export class AppModule {}
