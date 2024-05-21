class EmailService {
    send(user, message) {
        console.log(`Sending email to ${user.email}: ${message}`);
        return true; // Retorna true para simular o envio do email
    }
}

module.exports = EmailService;