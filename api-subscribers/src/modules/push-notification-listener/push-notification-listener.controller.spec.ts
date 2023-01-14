import { Test, TestingModule } from '@nestjs/testing';
import { PushNotificationListenerController } from './push-notification-listener.controller';

describe('PushNotificationListenerController', () => {
    let controller: PushNotificationListenerController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PushNotificationListenerController],
        }).compile();

        controller = module.get<PushNotificationListenerController>(PushNotificationListenerController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
