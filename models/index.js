const User = require('./User');
const Pet = require('./Pet');
const Owner = require('./Owner');

User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Owner.belongsTo(User, {
//   foreignKey: 'user_id',
// });

Owner.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Pet.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Pet, Owner };
