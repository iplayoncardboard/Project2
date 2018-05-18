module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("user", {
      // Giving the Author model a name of type STRING
      user_name: DataTypes.STRING,
      pw_hash: DataTypes.STRING
    });

    return User;
}
