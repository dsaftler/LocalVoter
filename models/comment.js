module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    billID: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 240]
      }
    }
  });
};
