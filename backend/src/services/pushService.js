class PushService {
    async send(user, message) {
        console.log(`Sending push notification to ${user.name}: ${message}`);
        return true; // Simula o envio de push notification
    }
}

module.exports = PushService;