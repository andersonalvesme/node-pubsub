import { Test, TestingModule } from '@nestjs/testing';
import { SmsListenerService } from './sms-listener.service';

describe('SmsListenerService', () => {
    let service: SmsListenerService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SmsListenerService],
        }).compile();

        service = module.get<SmsListenerService>(SmsListenerService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
