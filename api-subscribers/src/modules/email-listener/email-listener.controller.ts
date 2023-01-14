import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RedisContext } from '@nestjs/microservices';
import { EnumChannels, EnumChannelsKey } from '../_shared/enums/EnumChannels';
import { EmailListenerService } from './email-listener.service';

@Controller('email-listener')
export class EmailListenerController {
    constructor(
        private readonly service: EmailListenerService
    ) {
    }

    @MessagePattern(EnumChannelsKey.get(EnumChannels.EMAIL))
    consume(@Payload() data, @Ctx() context: RedisContext): void {
        this.service.sendEmail(data, context);
    }

}
