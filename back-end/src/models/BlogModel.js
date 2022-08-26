const { Blog, UpdateBlog } = require("../../models");

const DATA_ATUAL = new Date();

const create = async (titulo, corpo) => {
  const blog = await Blog.create({ titulo, dataCriacao: dataAgora, ativo: 1 });
  await UpdateBlog.create({
    corpo,
    dataAtualizacao: DATA_ATUAL,
    ativo: true,
    blogId: blog.id,
  });

  return {
    ...blog.dataValues,
    corpo, 
  }
};

const update = async (corpo, blogId) => {
  const updateBlog = await UpdateBlog.create({
    corpo,
    dataAtualizacao: DATA_ATUAL,
    ativo: true,
    blogId,
  });

  return updateBlog;
}

const getAllUpdate = async () => {
  console.log("model update");
  await UpdateBlog.create({
    corpo: "hdfusah",
    dataAtualizacao: "2022-01-01",
    blogId: 1,
  });
  const data = await UpdateBlog.findAll({ where: { blogId: 1 } });

  return data;
};


const getAll = async () => {
  const data = await UpdateBlog.findAll({
    include: Blog,
    where: { ativo: 1 },
  });

  return data;
};

module.exports = {
  getAll,
  getAllUpdate,
  create,
  update,
};