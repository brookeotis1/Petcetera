const sequelize = require('../config/connection');
const seedPet = require('./petData');
const seedOwner = require('./ownerData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPet();

  await seedUser();

  await seedOwner();

  process.exit(0);
};

seedAll();
