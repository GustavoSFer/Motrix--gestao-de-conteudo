const Blog = (sequelize, DataTypes) => {
  const Blog = sequelize.define("Blog", {
    titulo: DataTypes.STRING,
    dataCriacao: DataTypes.DATE,
    ativo: DataTypes.BOOLEAN,
  }, {
    sequelize,
    tableName: 'blogs',
    timestamps: false,
  });

  Blog.associate = (models) => {
    Blog.hasMany(models.UpdateBlog);
  }

  return Blog;
};

module.exports = Blog;
