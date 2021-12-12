module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
    name: {
      type: DataTypes.STRING,
    },
  });

  Student.associate = (models) => {
    Student.belongsTo(models.Class, {
      foreignKey: {
        allowNull: true,
      },
    });
  };

  return Student;
};
