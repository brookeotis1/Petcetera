const { User } = require('../models');

const userdata = [
  {
    id: 1,
    username: 'JohnSmith',
    email: 'johnSmith@gmail.com',
    password: 'passwordABC',
  },
  {
    id: 2,
    username: 'PeggyRawlings',
    email: 'prowlings234@yahoo.com',
    password: 'password123',
  },
  {
    id: 3,
    username: 'CaseyJones',
    email: 'rrengineer@railroad.com',
    password: 'chugchug7',
  },
];
const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
