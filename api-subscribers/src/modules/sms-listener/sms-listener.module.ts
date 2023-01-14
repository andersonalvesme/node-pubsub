import { Module } from '@nestjs/common';
import { SmsListenerService } from './sms-listener.service';
import { SmsListenerController } from './sms-listener.controller';

@Module({
    providers: [SmsListenerService],
    controllers: [SmsListenerController]
})
export class SmsListenerModule {
}
