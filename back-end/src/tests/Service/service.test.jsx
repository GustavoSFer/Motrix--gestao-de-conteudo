const sinon = require('sinon');
const { expect } = require('chai');
const serviceBlog = require('../../service/BlogService');
const modelBlog = require('../../models/BlogModel');
const mock = require('../Mock');

describe('Create', () => {
  it('Criando um post com os dados corretos', async () => {
    sinon.stub(modelBlog, 'create').resolves(mock.responseCreate);
    const createBlog = await serviceBlog.create('realização de teste', 'fazendo uma atualização de teste');

    expect(createBlog).to.be.equal(mock.responseCreate);
  });

  it('Criar um post sem passar o titulo retorna o '
  + 'erro "Titulo é um campo obrigatório"', async () => {
    const createBlog = await serviceBlog.create(undefined, 'fazendo uma atualização de teste');

    expect(createBlog).to.be.eql({ error: 400, message: 'Titulo é um campo obrigatório' })
  });

  it('Criar um post sem passar o titulo retorna o '
  + 'erro "Corpo é um campo obrigatório"', async () => {
    const createBlog = await serviceBlog.create('realização de teste', undefined);

    expect(createBlog).to.be.eql({ error: 400, message: 'Corpo é um campo obrigatório' })
  });
});