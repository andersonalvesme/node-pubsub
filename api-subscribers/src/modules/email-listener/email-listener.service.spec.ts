import { Test, TestingModule } from '@nestjs/testing';
import { EmailListenerService } from './email-listener.service';

describe('EmailListenerService', () => {
    let service: EmailListenerService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [EmailListenerService],
        }).compile();

        service = module.get<EmailListenerService>(EmailListenerService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
