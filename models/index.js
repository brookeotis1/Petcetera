const User = require('./User');
const Pet = require('./Pet');
const Owner = require('./Owner');

User.hasOne(Owner, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Owner.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Pet.belongsTo(Owner, {
  foreignKey: 'user_id',
});

module.exports = { User, Pet, Owner };
