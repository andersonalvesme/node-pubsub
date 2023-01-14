import { Module } from '@nestjs/common';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { UsersModule } from './modules/users/users.module';

@Module({
    imports: [
        NotificationsModule,
        UsersModule
    ]
})
export class AppModule {
}
