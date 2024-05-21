const PushService = require('../../src/services/pushService');

describe('PushService', () => {
    let pushService;

    beforeEach(() => {
        pushService = new PushService();
    });

    test('should send push notification', async () => {
        const user = { name: 'Jane Smith' };
        const message = 'Test push notification message';

        const result = await pushService.send(user, message);

        expect(result).toBe(true);
    });

    test('should log the correct message', async () => {
        console.log = jest.fn(); // Mock console.log
        const user = { name: 'Jane Smith' };
        const message = 'Test push notification message';

        await pushService.send(user, message);

        expect(console.log).toHaveBeenCalledWith(`Sending push notification to Jane Smith: Test push notification message`);
    });
});
