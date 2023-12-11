import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as nocache from 'nocache';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Use nocache middleware globally for all route
  app.use(nocache());

  // Enable CORS for all routes
  app.enableCors();

  await app.listen(8000);
}

bootstrap();
