const notificationService = require('../services/notificationService');
const logRepository = require('../repositories/logRepository');
const NotificationDto = require('../dtos/notificationDto');

const send = async (req, res) => {
    try {
        const { category, message } = req.body;
        console.log('Received request to send notification:', { category, message });
        const notificationDto = new NotificationDto(category, message);
        NotificationDto.validate(notificationDto);

        await notificationService.sendNotification(notificationDto.category, notificationDto.message);
        res.status(200).send({ success: true, message: 'Notification sent' });
    } catch (error) {
        console.error('Error sending notification:', error);
        res.status(400).send({ success: false, message: error.message });
    }
};

const getLogs = async (req, res) => {
    try {
        const logs = await logRepository.getAllLogs();
        res.status(200).send(logs);
    } catch (error) {
        console.error('Error fetching logs:', error);
        res.status(500).send({ success: false, message: error.message });
    }
};

module.exports = {
    send,
    getLogs,
};