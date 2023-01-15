import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationDto } from './dtos/notification.dto';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
    constructor(
        private readonly service: NotificationsService
    ) {
    }

    @Post()
    async notify(@Body() notification: NotificationDto) {
        return await this.service.notify(notification);
    }

    @Get('logs')
    async getLogs() {
        return await this.service.getLogs();
    }
}
