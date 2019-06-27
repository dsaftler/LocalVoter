module.exports = function(sequelize, DataTypes) {
  var UserBill = sequelize.define("UserBill", {
    Follow: DataTypes.BOOLEAN
  });
  UserBill.associate = function(models) {
    User.HasMany(models.Bill, { through: UserBill });
    Bill.belongsToMany(models.User, { through: UserBill });
  };
  return UserBill;
};
