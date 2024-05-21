class EmailService {
    send(user, message) {
        console.log(`Sending email to ${user.email}: ${message}`);
        return true; // Return true to simulate email send
    }
}

module.exports = EmailService;