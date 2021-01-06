const { Pet } = require('../models');

const petdata = [
  {
    id: 1,
    petname: 'Bingo',
    nickname: 'Bingo',
    species: 'Dog',
    breed: 'Border Collie',
    microchipId: '566789',
  },
  {
    id: 2,
    petname: 'Casey',
    nickname: 'Casey',
    species: 'Dog',
    breed: 'Poodle',
    food: 'K9 food',
    microchipId: '456567',
  },
  {
    id: 3,
    petname: 'Panda',
    nickname: 'Panda',
    species: 'Cat',
    breed: 'Siamese',
    microchipId: '999880',
  },
  {
    id: 4,
    petname: 'Rocko',
    nickname: 'R',
    species: 'bird',
    breed: 'Cockatoo',
    microchipId: '9998837',
  },
];

const seedPet = () => Pet.bulkCreate(petdata);

module.exports = seedPet;
