module.exports = function (sequelize, DataTypes) {
  var Bill = sequelize.define("Bill", {
    BillTrack_ID: DataTypes.STRING
  });
 Bill.belongsToMany(User, { through: UserBill });
  return Bill;
};