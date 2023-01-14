import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NotificationDto } from './dtos/notification.dto';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import appSource from '../../database/data.source';
import { EnumChannelsKey } from '../users/enums/EnumChannels';

@Injectable()
export class NotificationsService {
    private readonly userRepository: Repository<User>;

    constructor(
        @Inject('REDIS_SERVICE') private client: ClientProxy
    ) {
        this.userRepository = appSource.getRepository(User);
    }

    async notify(notification: NotificationDto): Promise<void> {
        const users = await this.userRepository.createQueryBuilder()
            .andWhere('FIND_IN_SET(:category, subscribed)', { category: notification.category })
            .getMany();

        for (const user of users) {
            user.channels.split(',').forEach(channel => {
                try {
                    this.client.emit(EnumChannelsKey.get(parseInt(channel)), user);
                    console.log(`${Date()} - Published ${EnumChannelsKey.get(parseInt(channel))} to ${user.name}.`);
                } catch (error) {
                    console.error(`${Date()} - Unable to publish ${EnumChannelsKey.get(parseInt(channel))} to ${user.name}`);
                }
            });
        }
    }

}
