import { Controller } from '@nestjs/common';
import { PushNotificationListenerService } from './push-notification-listener.service';
import { Ctx, MessagePattern, Payload, RedisContext } from '@nestjs/microservices';
import { EnumChannels, EnumChannelsKey } from '../_shared/enums/EnumChannels';

@Controller('push-notification-listener')
export class PushNotificationListenerController {
    constructor(
        private readonly service: PushNotificationListenerService
    ) {
    }

    @MessagePattern(EnumChannelsKey.get(EnumChannels.PUSH_NOTIFICATION))
    consume(@Payload() data, @Ctx() context: RedisContext): void {
        this.service.sendPushNotification(data, context);
    }

}
