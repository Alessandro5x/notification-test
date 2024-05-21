const { sendNotification } = require('../services/notificationService');

const send = (req, res) => {
    const { category, message } = req.body;
    sendNotification(category, message);
    res.status(200).send({ success: true, message: 'Notification sent' });
};

const getLogs = async (req, res) => {
    const logs = await LogRepository.getAllLogs();
    res.status(200).send(logs);
};

module.exports = {
    send,
    getLogs,
};
