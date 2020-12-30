const { Owner } = require('../models');

const ownerdata = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    phone: '801-555-1234',
    zip: 56748,
    bio: 'Always give 100% — unless you’re donating blood.',
  },
  {
    id: 2,
    firstName: 'Peggy',
    lastName: 'Rawlings',
    phone: '801-555-5678',
    zip: 52308,
    bio: 'I apologize for anything I post while hungry.',
  },
  {
    id: 3,
    firstName: 'Peggy',
    lastName: 'Rawlings',
    phone: '801-555-5678',
    zip: 52308,
    bio: 'I apologize for anything I post while hungry.',
  },
  {
    id: 4,
    firstName: 'Casey',
    lastName: 'Jones',
    phone: '876-234-0987',
    zip: 90250,
    bio: 'Gifted napper, talker, and ice cream eater.',
  },
];
const seedOwner = () => Owner.bulkCreate(ownerdata);

module.exports = seedOwner;
