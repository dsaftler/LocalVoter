module.exports = function (sequelize, DataTypes) {
  var UserBills = sequelize.define('userbill', {
   Follow: DataTypes.BOOLEAN
  });
  
  User.belongsToMany(Bill, { through: UserBill });
  Bill.belongsToMany(User, { through: UserBill });
  return UserBill;
};