const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    role: String,
    password: String,
    profileType: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
    isstatus: {
        type: String,
        enum: ['Active', 'Suspended'],
        default: 'Active'
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
