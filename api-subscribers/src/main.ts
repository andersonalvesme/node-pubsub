import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import appSource from './database/data.source';
import * as process from 'process';
import { config } from 'dotenv';

config();

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.REDIS,
        options: {
            host: process.env.REDIS_HOST,
            port: parseInt(process.env.REDIS_PORT)
        }
    });

    appSource.initialize().catch((error) => console.log('Database initialization error', error));

    await app.listen();
}

bootstrap();
