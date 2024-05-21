const EmailService = require('./emailService');
const PushService = require('./pushService');
const SMSService = require('./smsService');
const logRepository = require('../repositories/logRepository');
const mockUsers = require('../utils/mockUsers');

const sendNotification = async (category, message) => {
    for (const user of mockUsers) {
        if (user.subscribed.includes(category)) {
            for (const channel of user.channels) {
                let notificationService;
                switch (channel) {
                    case 'E-Mail':
                        notificationService = new EmailService();
                        break;
                    case 'Push Notification':
                        notificationService = new PushService();
                        break;
                    case 'SMS':
                        notificationService = new SMSService();
                        break;
                }
                await notificationService.send(user, message);
                await logRepository.saveLog({ user, category, message, channel, timestamp: new Date() });
            }
        }
    }
};

module.exports = {
    sendNotification,
};