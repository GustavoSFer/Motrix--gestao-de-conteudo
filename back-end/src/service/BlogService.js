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

const getOne = async (id) => {
  if (id === undefined) return { error: 400, messagem: 'id é obrigatório' };

  const data = await model.getOne(id);
  return data;
};

module.exports = {
  getOne,
  create,
  update,
};
