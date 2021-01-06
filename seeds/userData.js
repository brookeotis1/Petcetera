const { User } = require('../models');

const userdata = [
  {
    username: 'Sally',
    email: 'sally@sally.com',
    password: 'ssssss',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
