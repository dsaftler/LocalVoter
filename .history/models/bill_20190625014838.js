module.exports = function(sequelize, DataTypes) {
  var Bill = sequelize.define("Bill", {
    BillTrackID: DataTypes.STRING
  });
  Bill.associate = function(models) {
    Bill.belongsToMany(models.User);
  };
  return Bill;
};
