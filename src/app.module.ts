import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from "nestjs-pino";

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
  ],
  // controllers: [HealthController],
  // providers: [HealthCheckerUseCase],
})
export class AppModule {}
