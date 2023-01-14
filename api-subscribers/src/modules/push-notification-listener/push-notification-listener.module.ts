import { Module } from '@nestjs/common';
import { PushNotificationListenerService } from './push-notification-listener.service';
import { PushNotificationListenerController } from './push-notification-listener.controller';

@Module({
    providers: [PushNotificationListenerService],
    controllers: [PushNotificationListenerController]
})
export class PushNotificationListenerModule {
}
