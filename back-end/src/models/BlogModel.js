const { Blog, UpdateBlog } = require('../../models');

const DATA_ATUAL = new Date();

const create = async (titulo, corpo) => {
  const blog = await Blog.create({ titulo, dataCriacao: DATA_ATUAL, ativo: 1 });

  await UpdateBlog.create({
    corpo,
    dataAtualizacao: DATA_ATUAL,
    ativo: true,
    blogId: blog.id,
  });

  return {
    ...blog.dataValues,
    corpo,
  };
};

const update = async (corpo, blogId) => {
  const updateBlog = await UpdateBlog.create({
    corpo,
    dataAtualizacao: DATA_ATUAL,
    ativo: true,
    blogId,
  });

  return updateBlog;
};

const getAllUpdate = async () => {
  await UpdateBlog.create({
    corpo: 'teste',
    dataAtualizacao: '2022-01-01',
    blogId: 1,
  });
  const data = await UpdateBlog.findAll({ where: { blogId: 1 } });

  return data;
};

const getAll = async () => {
  const blogAll = await Blog.findAll({
    where: { ativo: true },
    include: { model: UpdateBlog },
  });

  return blogAll;
};

const getOne = async (id) => {
  const blogOne = await Blog.findAll({
    where: { id },
    include: { model: UpdateBlog },
  });

  return blogOne;
};

const removeOneUpdate = async (id) => {
  const removeBlog = await UpdateBlog.update({ ativo: false }, { where: { id } });
  return removeBlog;
};

const desativar = async (id) => {
  await Blog.update({ ativo: false }, { where: { id } });
  const desativarBlog = await UpdateBlog.update({ ativo: false }, { where: { blogId: id } });
  return desativarBlog;
};

const remove = async (id) => {
  const removeBlog = await UpdateBlog.destroy({ where: { blogId: id } });
  await Blog.destroy({ where: { id } });

  return removeBlog;
};

module.exports = {
  getOne,
  getAll,
  getAllUpdate,
  create,
  update,
  removeOneUpdate,
  desativar,
  remove,
};
