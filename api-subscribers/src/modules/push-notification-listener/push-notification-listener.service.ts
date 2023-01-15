import { Injectable } from '@nestjs/common';
import { RedisContext } from '@nestjs/microservices';
import insertLog from '../_shared/logger';

@Injectable()
export class PushNotificationListenerService {

    async sendPushNotification(data, context: RedisContext): Promise<void> {
        await insertLog(context.getChannel(), data.user, data.notification);
    }

}
