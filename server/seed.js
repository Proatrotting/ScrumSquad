const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Profile = require('./models/Profile');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Profile.deleteMany();

    await Profile.insertMany([
      { name: 'User Admin' },
    ]);

    console.log('Profiles added!');
    mongoose.disconnect();
  })
  .catch(err => console.log(err));
