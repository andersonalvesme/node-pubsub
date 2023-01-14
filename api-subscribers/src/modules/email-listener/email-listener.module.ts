import { Module } from '@nestjs/common';
import { EmailListenerService } from './email-listener.service';
import { EmailListenerController } from './email-listener.controller';

@Module({
    providers: [EmailListenerService],
    controllers: [EmailListenerController]
})
export class EmailListenerModule {
}
