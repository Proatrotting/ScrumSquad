const Cleaner = require('../models/Cleaner');

exports.getCleaners = async (req, res) => {
    try {
        const cleaners = await Cleaner.find();
        res.json(cleaners);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
