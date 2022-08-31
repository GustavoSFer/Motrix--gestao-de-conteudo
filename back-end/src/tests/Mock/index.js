const responseCreate = {
  Blog: {
    dataValues: {
      id: 9,
      titulo: 'realização de teste',
      dataCriacao: '2022-08-31T14:23:05.050Z',
      ativo: true
    }
  }
};


const bodyCreate = {
  titulo: 'realização de teste',
  corpo: 'fazendo uma atualização de teste',
};

const update = {
  UpdateBlog: {
    dataValues: {
      id: 30,
      corpo: 'fazendo uma atualização de teste',
      dataAtualizacao: '2022-08-31T14:37:01.124Z',
      ativo: true,
      blogId: 1
    },
  }
};

const returnGetAllService = [
 {
    Blog: {
      dataValues: {
        id: 3,
        titulo: 'Terceiro',
        dataCriacao: '2022-07-26T00:00:00.000Z',
        ativo: true,
        UpdateBlogs: [Array]
      },
    },
  }
]

module.exports = {
  responseCreate,
  bodyCreate,
  update,
  returnGetAllService,
};
