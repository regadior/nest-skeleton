import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { PrismaErrorExceptionFilter } from '@presentation/filters/prisma-error-exception.filter';
import { LoggerModule } from 'nestjs-pino';
import { AuthModule } from './modules/auth.module';
import { TaskModule } from './modules/task.module';
import { UserModule } from './modules/user.module';
import { IsOwnerModule } from '@presentation/modules/is-owner.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
        },
      },
    }),
    UserModule,
    AuthModule,
    TaskModule,
    IsOwnerModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: PrismaErrorExceptionFilter,
    },
  ],
})
export class AppModule {}
