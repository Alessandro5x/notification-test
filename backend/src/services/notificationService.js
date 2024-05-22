const EmailService = require('./emailService');
const PushService = require('./pushService');
const SMSService = require('./smsService');
const logRepository = require('../repositories/logRepository');
const mockUsers = require('../utils/mockUsers');

const sendNotification = async (category, message) => {
    console.log('Starting to send notification');
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
                    default:
                        console.error('Unknown channel:', channel);
                        continue;
                }
                console.log(`Sending ${channel} to user ${user.name}`);
                await notificationService.send(user, message);
                await logRepository.saveLog({ user, category, message, channel, timestamp: new Date() });
            }
        }
    }
    console.log('Finished sending notification');
};

module.exports = {
    sendNotification,
};