import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import * as process from 'process';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'REDIS_SERVICE',
                transport: Transport.REDIS,
                options: {
                    host: process.env.REDIS_HOST,
                    port: parseInt(process.env.REDIS_PORT)
                }
            }
        ])
    ],
    controllers: [NotificationsController],
    providers: [NotificationsService]
})
export class NotificationsModule {
}
