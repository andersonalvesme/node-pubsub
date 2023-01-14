import { Injectable } from '@nestjs/common';
import { RedisContext } from '@nestjs/microservices';

@Injectable()
export class SmsListenerService {

    sendSms(data, context: RedisContext): void {
        console.log(`${Date()} - Sent ${context.getChannel()} to ${data.name}.`);
    }

}
