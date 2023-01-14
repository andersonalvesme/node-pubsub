import { Body, Controller, Post } from '@nestjs/common';
import { NotificationDto } from './dtos/notification.dto';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
    constructor(
        private readonly service: NotificationsService
    ) {
    }

    @Post()
    async notify(@Body() notification: NotificationDto): Promise<void> {
        return await this.service.notify(notification);
    }
}
