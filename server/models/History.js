const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    action: String,
    date: Date
});

module.exports = mongoose.model('History', historySchema);
