const { Owner } = require('../models');

const ownerdata = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    bio: 'Always give 100% — unless you’re donating blood.',
  },
  {
    id: 2,
    firstName: 'Peggy',
    lastName: 'Rawlings',
    bio: 'I apologize for anything I post while hungry.',
  },
  {
    id: 3,
    firstName: 'Peggy',
    lastName: 'Rawlings',
    bio: 'I apologize for anything I post while hungry.',
  },
  {
    id: 4,
    firstName: 'Casey',
    lastName: 'Jones',
    bio: 'Gifted napper, talker, and ice cream eater.',
  },
];
const seedOwner = () => Owner.bulkCreate(ownerdata);

module.exports = seedOwner;
