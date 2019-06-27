module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING
  });
  User.associate = function (models) {
    User.HasMany(Bill, { through: UserBill });
  };
  return User;
};