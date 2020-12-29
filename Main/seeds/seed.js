// const sequelize = require('../config/connection');
// const { User, Project } = require('../models');

// const userData = require('./userData.json');
// const projectData = require('./projectData.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const project of projectData) {
//     await Project.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();

const sequelize = require("../config/connection");
const seedPet = require("./petData");
const seedOwner = require("./ownerData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPet();

  await seedOwner();

  process.exit(0);
};

seedAll();