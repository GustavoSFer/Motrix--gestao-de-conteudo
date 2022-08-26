const Blog = (sequelize, DataTypes) => {
  const Blog = sequelize.define("Blog", {
    titulo: DataTypes.STRING,
    dataCriacao: DataTypes.DATE,
  }, {
    sequelize,
    tableName: 'blogs',
    timestamps: false,
  });

  Blog.assiciate = (models) => {
    Blog.hasMany(models.updateBlogs,
      { foreignKey: 'blogId' });
  }

  return Blog;
};

module.exports = Blog;
