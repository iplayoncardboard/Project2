

module.exports = function(sequelize, DataTypes) {
    const Libs = sequelize.define("libs", {
      category_id: DataTypes.INTEGER,
      phrase_1: DataTypes.TEXT,
      phrase_2: DataTypes.TEXT,
      phrase_3: DataTypes.TEXT,
      phrase_4: DataTypes.TEXT,
      phrase_5: DataTypes.TEXT,
      phrase_6: DataTypes.TEXT,
      phrase_7: DataTypes.TEXT,
      phrase_8: DataTypes.TEXT,
      phrase_9: DataTypes.TEXT,
      phrase_10: DataTypes.TEXT,
      phrase_11: DataTypes.TEXT,
      phrase_12: DataTypes.TEXT,
      phrase_13: DataTypes.TEXT,
      phrase_14: DataTypes.TEXT
    });

    Libs.associate = function(models) {
      
      Libs.hasMany(models.entries
        , {foreignKey: 'lib_id'}
      );
    };
  
    return Libs;
}
