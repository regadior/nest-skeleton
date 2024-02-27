import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  const options = new DocumentBuilder()
    .setTitle('Nest Skeleton')
    .setDescription('Nest Skeleton App ')
    .setVersion((process.env.VERSION as string) || '1.0')
    .addBearerAuth()
    .build();

  if (process.env.NODE_ENV === 'development') {
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api/docs', app, document);
    app.enableCors({
      allowedHeaders: '*',
      origin: '*',
    });
  } else {
    app.enableCors({
      origin: process.env.FRONTEND_URL,
    });
  }

  //setup logger
  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
