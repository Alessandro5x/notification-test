const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    user: Object,
    category: String,
    message: String,
    channel: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', logSchema);