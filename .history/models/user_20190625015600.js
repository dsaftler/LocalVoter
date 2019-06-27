module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING
  });
  User.associate = function(models) {
    User.hasMany(models.Bill);
  };
  return User;
};