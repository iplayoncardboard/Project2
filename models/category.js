module.exports = function(sequelize, DataTypes) {
    const Category = sequelize.define("category", {
      // Giving the Author model a name of type STRING
      category: DataTypes.STRING,
    });

    return Category;
}
