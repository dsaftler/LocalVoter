module.exports = function (sequelize, DataTypes) {
  var Bill = sequelize.define("Bill", {
    state: DataTypes.STRING,
    zip: DataTypes.STRING
  });
  return User;
};