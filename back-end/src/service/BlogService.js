const model = require('../models/BlogModel');
const { schemaBlog, schemaUpdate } = require('../Joi/Schema');

const create = async (titulo, corpo) => {
  const validation = schemaBlog.validate({ titulo, corpo });
  if (validation.error) return { error: 400, message: validation.error.details[0].message };

  const createBlog = await model.create(titulo, corpo);

  return createBlog;
};

const update = async (corpo, blogId) => {
  const validation = schemaUpdate.validate({ corpo, blogId });
  if (validation.error) return { error: 400, message: validation.error.details[0].message };

  const updateBlog = await model.update(corpo, blogId);

  return updateBlog;
};

const getAll = async () => {
  const blogAll = await model.getAll();
  return blogAll;
};

const getOne = async (id) => {
  if (id === undefined) return { error: 400, messagem: 'id é obrigatório' };

  const data = await model.getOne(id);
  return data;
};

const removeOneUpdate = async (id) => {
  if (id === undefined) return { error: 400, messagem: 'id é obrigatório' };

  const removeOneBlog = await model.removeOneUpdate(id);
  console.log(removeOneBlog);
  return removeOneBlog;
};

const desativar = async (id) => {
  if (id === undefined) return { error: 400, messagem: 'id é obrigatório' };

  const desativarBlog = await model.desativar(id);
  return desativarBlog;
};

const remove = async (id) => {
  if (id === undefined) return { error: 400, messagem: 'id é obrigatório' };

  const removeBlog = await model.remove(id);
  return removeBlog;
};

module.exports = {
  getOne,
  getAll,
  create,
  update,
  removeOneUpdate,
  desativar,
  remove,
};
