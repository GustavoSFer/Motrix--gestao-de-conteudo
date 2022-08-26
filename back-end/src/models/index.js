const { Blog, UpdateBlog } = require('../../models');

const getAll = async () => {
  console.log('model');
  const data = await UpdateBlog.findAll({
    include: Blog,
    where: { ativo: 1 },
  });

  return data;
};

const create = async (titulo, corpo) => {
  const dataAgora = new Date()
  const blog = await Blog.create({ titulo, dataCriacao: dataAgora, ativo: 1 });
  await UpdateBlog.create({ corpo, dataAtualizacao: dataAgora, blogId: blog.id });
};

const getAllUpdate = async () => {
  console.log('model update');
  await UpdateBlog.create({ corpo: 'hdfusah', dataAtualizacao: '2022-01-01', blogId: 1 })
  const data = await UpdateBlog.findAll({ where: { blogId: 1}});

  return data;
};

module.exports = {
  getAll,
  getAllUpdate,
  create,
}