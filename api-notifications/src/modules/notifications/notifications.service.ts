import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NotificationDto } from './dtos/notification.dto';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import appSource from '../../database/data.source';
import { EnumChannelsKey, EnumChannelsLabel } from '../users/enums/EnumChannels';

@Injectable()
export class NotificationsService {
    private readonly userRepository: Repository<User>;

    constructor(
        @Inject('REDIS_SERVICE') private client: ClientProxy
    ) {
        this.userRepository = appSource.getRepository(User);
    }

    async notify(notification: NotificationDto) {
        const users = await this.userRepository.createQueryBuilder()
            .andWhere('FIND_IN_SET(:category, subscribed)', { category: notification.category })
            .getMany();

        for (const user of users) {
            user.channels.split(',').forEach(channel => {
                try {
                    this.client.emit(EnumChannelsKey.get(parseInt(channel)), { notification, user });
                    this.insertLog(channel, user, notification);
                } catch (error) {
                    console.error(`${this.getFormatedDate()} - Unable to publish ${EnumChannelsKey.get(parseInt(channel))} to ${user.name}`);
                }
            });
        }
    }

    async getLogs() {
        return await appSource.createQueryBuilder()
            .select()
            .from('logs', null)
            .orderBy('id', 'DESC')
            .getRawMany();
    }

    private async insertLog(channel, user, notification) {
        try {
            await appSource.createQueryBuilder()
                .insert()
                .into('logs')
                .values({
                    created_at: this.getFormatedDate(),
                    log: JSON.stringify({
                        application: 'api-notifications',
                        channel: EnumChannelsLabel.get(parseInt(channel)),
                        user,
                        notification
                    })
                }).execute();
        } catch (error) {
            console.error(`${this.getFormatedDate()} - Unable to create log. ${EnumChannelsKey.get(parseInt(channel))} - ${user.name}`);
        }
    }

    private getFormatedDate() {
        return new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
}
