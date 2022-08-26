const service = require('../service/BlogService');

const create = async (req, res, next) => {
  const { titulo, corpo } = req.body;

  const createBlog = await service.create(titulo, corpo);
  if (createBlog.error) return next(createBlog);

  return res.status(201).json(createBlog);
};

const update = async (req, res, next) => {
  const { corpo, blogId } = req.body;

  const updateBlog = await service.update(corpo, +blogId);
  if (updateBlog.error) return next(updateBlog);

  return res.status(200).json(updateBlog);
};

const getOne = async (req, res, next) => {
  const { id } = req.params;
  const blogOne = await service.getOne(id);

  if (blogOne.error) return next(blogOne);

  return res.status(200).json(blogOne);
};

module.exports = {
  getOne,
  create,
  update,
};
