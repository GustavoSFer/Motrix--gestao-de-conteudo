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
    Blog.hasMany(models.updateBlogs);
  }

  return Blog;
};

module.exports = Blog;
