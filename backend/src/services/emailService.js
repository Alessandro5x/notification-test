class EmailService {
    async send(user, message) {
        console.log(`Sending email to ${user.email}: ${message}`);
        return true; // Simula o envio de email
    }
}

module.exports = EmailService;