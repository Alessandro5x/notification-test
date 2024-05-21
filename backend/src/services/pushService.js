class PushService {
    async send(user, message) {
        console.log(`Sending push notification to ${user.name}: ${message}`);
        return true; // Simulate the push notification
    }
}

module.exports = PushService;