const EmailService = require('../../src/services/emailService');

test('should send email', () => {
    const emailService = new EmailService();
    const user = { email: 'test@example.com' };
    const message = 'Test message';

    const result = emailService.send(user, message);

    expect(result).toBe(true);
});