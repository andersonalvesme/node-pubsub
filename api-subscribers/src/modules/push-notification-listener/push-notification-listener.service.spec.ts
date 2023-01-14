import { Test, TestingModule } from '@nestjs/testing';
import { PushNotificationListenerService } from './push-notification-listener.service';

describe('PushNotificationListenerService', () => {
    let service: PushNotificationListenerService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PushNotificationListenerService],
        }).compile();

        service = module.get<PushNotificationListenerService>(PushNotificationListenerService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
