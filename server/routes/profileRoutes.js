const express = require('express');
const Profile = require('../models/Profile');
const router = express.Router();

// GET all profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
