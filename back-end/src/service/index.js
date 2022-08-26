const model = require('../models');

const getAll = async () => {
  console.log('Service');

  // const data = await model.getAllUpdate();
  const data = await model.getAll();
  return data;
};

const create = async (titulo, corpo) => {
  const createBlog = await model.create(titulo, corpo);
  return createBlog;
};

module.exports = {
  getAll,
  create,
};
