const notificationService = require('../services/notificationService');
const logRepository = require('../repositories/logRepository');
const NotificationDto = require('../dtos/notificationDto');

const send = async (req, res) => {
    try {
        const { category, message } = req.body;
        const notificationDto = new NotificationDto(category, message);
        NotificationDto.validate(notificationDto);

        await notificationService.sendNotification(notificationDto.category, notificationDto.message);
        res.status(200).send({ success: true, message: 'Notification sent' });
    } catch (error) {
        res.status(400).send({ success: false, message: error.message });
    }
};

const getLogs = async (req, res) => {
    const logs = await logRepository.getAllLogs();
    res.status(200).send(logs);
};

module.exports = {
    send,
    getLogs,
};