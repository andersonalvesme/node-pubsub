import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RedisContext } from '@nestjs/microservices';
import { EnumChannels, EnumChannelsKey } from '../_shared/enums/EnumChannels';
import { SmsListenerService } from './sms-listener.service';

@Controller('sms-listener')
export class SmsListenerController {
    constructor(
        private readonly service: SmsListenerService
    ) {
    }

    @MessagePattern(EnumChannelsKey.get(EnumChannels.SMS))
    consume(@Payload() data, @Ctx() context: RedisContext): void {
        this.service.sendSms(data, context);
    }

}
