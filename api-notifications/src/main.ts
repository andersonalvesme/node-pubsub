import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import appSource from './database/data.source';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });

    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix('api');

    appSource.initialize().catch((error) => console.log('Database initialization error', error));

    await app.listen(3000);
}

bootstrap();
