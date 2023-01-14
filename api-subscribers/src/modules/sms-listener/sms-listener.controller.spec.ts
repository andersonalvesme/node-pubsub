import { Test, TestingModule } from '@nestjs/testing';
import { SmsListenerController } from './sms-listener.controller';

describe('SmsListenerController', () => {
    let controller: SmsListenerController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SmsListenerController],
        }).compile();

        controller = module.get<SmsListenerController>(SmsListenerController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
