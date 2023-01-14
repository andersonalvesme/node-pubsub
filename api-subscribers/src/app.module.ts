import { Module } from '@nestjs/common';
import { SmsListenerModule } from './modules/sms-listener/sms-listener.module';
import { EmailListenerModule } from './modules/email-listener/email-listener.module';
import { PushNotificationListenerModule } from './modules/push-notification-listener/push-notification-listener.module';

@Module({
    imports: [SmsListenerModule, EmailListenerModule, PushNotificationListenerModule]
})
export class AppModule {
}
