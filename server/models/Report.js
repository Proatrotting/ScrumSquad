const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    type: String,
    data: Object,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', reportSchema);
