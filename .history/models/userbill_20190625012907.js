module.exports = function(sequelize, DataTypes) {
  var UserBill = sequelize.define("UserBill", {
    Follow: DataTypes.BOOLEAN
  });
  User.HasMany(Bill, { through: UserBill });
  Bill.belongsToMany(User, { through: UserBill });
  return UserBill;
};
