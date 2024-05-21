const Log = require('../models/log');

const saveLog = async (logData) => {
    const log = new Log(logData);
    await log.save();
};

const getAllLogs = async () => {
    return await Log.find().sort({ createdAt: -1 });
};

module.exports = {
    saveLog,
    getAllLogs,
};
