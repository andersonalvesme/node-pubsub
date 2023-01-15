import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import appSource from './database/data.source';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.REDIS,
        options: {
            host: 'localhost',
            port: 6379
        }
    });

    appSource.initialize().catch((error) => console.log('Database initialization error', error));

    await app.listen();
}

bootstrap();
