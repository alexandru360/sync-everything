import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('NestApplication');

  // Create a Swagger document builder
  const config = new DocumentBuilder()
    .setTitle('Sync everything')
    .setDescription('Sync everything api')
    .setVersion('1.0')
    .addTag('sync-tag') // Optional: Add tags to categorize your API endpoints
    .build();

  // Create a Swagger module with the specified document builder
  const document = SwaggerModule.createDocument(app, config);

  // Enable Swagger UI at the endpoint '/swagger'
  SwaggerModule.setup('swagger', app, document);

  const port = 3000;

  await app.listen(port);

  logger.log(`Application is running on port ${port}`);
}
bootstrap().then(() => null);
