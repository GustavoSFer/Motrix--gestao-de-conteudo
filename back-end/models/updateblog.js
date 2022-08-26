const UpdateBlog = (sequelize, DataTypes) => {
  const UpdateBlog = sequelize.define("UpdateBlog", {
    corpo: DataTypes.STRING,
    dataAtualizacao: DataTypes.DATE,
    blogId: DataTypes.INTEGER,
    ativo: DataTypes.BOOLEAN,
  }, {
    sequelize,
    tableName: 'updateBlogs',
    timestamps: false,
  });

  UpdateBlog.associate = (models) => {
    UpdateBlog.belongsTo(models.Blog);
  }

  return UpdateBlog;
};

module.exports = UpdateBlog;
