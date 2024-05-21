const SMSService = require('../../src/services/smsService');

describe('SMSService', () => {
    let smsService;

    beforeEach(() => {
        smsService = new SMSService();
    });

    test('should send SMS', async () => {
        const user = { phone: '123456789' };
        const message = 'Test SMS message';

        const result = await smsService.send(user, message);

        expect(result).toBe(true);
    });

    test('should log the correct message', async () => {
        console.log = jest.fn(); // Mock console.log
        const user = { phone: '123456789' };
        const message = 'Test SMS message';

        await smsService.send(user, message);

        expect(console.log).toHaveBeenCalledWith(`Sending SMS to 123456789: Test SMS message`);
    });
});
