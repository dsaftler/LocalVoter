module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    state: DataTypes.STRING,
    allowNull: false,
    validate: {}
    zip: DataTypes.STRING
  });
  return User;
};