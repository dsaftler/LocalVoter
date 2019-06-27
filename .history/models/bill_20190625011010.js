module.exports = function(sequelize, DataTypes) {
  var Bill = sequelize.define("Bill", {
    BillTrackID: DataTypes.STRING
  });
  Bill.associate = function(models) {
    Bill.belongsToMany(User, { through: UserBill });
  };
  return Bill;
};
