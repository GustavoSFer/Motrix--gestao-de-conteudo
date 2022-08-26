const service = require('../service');

const getAll = async (req, res) => {
  console.log('controller');
  const data = await service.getAll();

  return res.status(200).json(data);
};

const create = async (req, res) => {
  const { titulo, corpo } = req.body;
  const createBlog = await service.create(titulo, corpo);

  return res.status(201).json(createBlog);
};

module.exports = {
  getAll,
  create,
};
