import { Test, TestingModule } from '@nestjs/testing';
import { EmailListenerController } from './email-listener.controller';

describe('EmailListenerController', () => {
    let controller: EmailListenerController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [EmailListenerController],
        }).compile();

        controller = module.get<EmailListenerController>(EmailListenerController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
