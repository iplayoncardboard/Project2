module.exports = function(sequelize, DataTypes) {
    const Entries = sequelize.define("entries", {
      // Giving the Author model a name of type STRING
      user_name: DataTypes.STRING,
      pw_hash: DataTypes.STRING
    });

   
  
    // Author.associate = function(models) {
    //   // Associating Author with Posts
    //   // When an Author is deleted, also delete any associated Posts
    //   Author.hasMany(models.Post, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return Entries;
}
