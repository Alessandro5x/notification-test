class SMSService {
    async send(user, message) {
        console.log(`Sending SMS to ${user.phone}: ${message}`);
        return true; // Simula o envio de SMS
    }
}

module.exports = SMSService;