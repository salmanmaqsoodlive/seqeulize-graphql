module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define("Class", {
    subject: {
      type: DataTypes.STRING,
    },
    section: {
      type: DataTypes.STRING,
    },
  });

  Class.associate = (models) => {
    Class.hasMany(models.Student, {
      onDelete: "cascade",
    });
  };

  return Class;
};
