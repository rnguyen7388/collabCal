module.exports = function(sequelize, DataTypes) {
    var Calendar = sequelize.define("Calendar", {
      group: {
          type: DataTypes.STRING,
          allowNull: false
      },
      groupmembers: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
  
    Calendar.associate = function(models) {
      Calendar.hasMany(models.User, {
        foreignKey: {
            allowNull: false
        }
      });
    };

    Calendar.associate = function(models) {
        Calendar.hasMany(models.Event, {
          foreignKey: {
            allowNull: false
          }
        });
      };


      return Calendar;
};