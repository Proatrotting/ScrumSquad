const mongoose = require('mongoose');

const cleanerSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    availability: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Cleaner', cleanerSchema);
