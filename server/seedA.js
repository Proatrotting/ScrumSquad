const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected! Seeding admin user...');

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ username: 'admin' });

    if (existingAdmin) {
      console.log('Admin user already exists:', existingAdmin);
    } else {
      const adminUser = new User({
        username: 'admin',
        email: 'admin@example.com',
        role: 'User Admin',
        password: 'admin'  // plain text for now, since your login checks plain text
      });

      await adminUser.save();
      console.log('Admin user created:', adminUser);
    }

    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Database error:', err);
  });
