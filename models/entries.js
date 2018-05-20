
module.exports = function(sequelize, DataTypes) {
  const Entries = sequelize.define("entries", {
    // Making the Entries model
    user_name: DataTypes.STRING,
    lib_id: DataTypes.INTEGER,
    word_1: DataTypes.TEXT,
    word_2: DataTypes.TEXT,
    word_3: DataTypes.TEXT,
    word_4: DataTypes.TEXT,
    word_5: DataTypes.TEXT,
    word_6: DataTypes.TEXT,
    word_7: DataTypes.TEXT,
    word_8: DataTypes.TEXT,
    word_9: DataTypes.TEXT,
    word_10: DataTypes.TEXT,
    word_11: DataTypes.TEXT,
    word_12: DataTypes.TEXT,
    word_13: DataTypes.TEXT
  });

  Entries.associate = function(models) {
    Entries.belongsTo(models.libs
       , {foreignKey: 'lib_id'}
    );
    
    
    // Entries.belongsTo(models.user
    //    , {foreignKey: 'user_name'}
    // );
    

  };

  return Entries;
}
