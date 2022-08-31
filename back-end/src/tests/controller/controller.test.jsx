const { expect } = require('chai');
const Sinon = require('sinon');
const serviceBlog = require('../../service/BlogService');
const controllerBlog = require('../../controller/BlogController');
const mock = require('../Mock');

const response = {};
const request = {};

describe('# Controller', () => {
  describe('# Create', () => {
    before(function () {
      request.body = { titulo: "realização de teste", corpo: "fazendo uma atualização de teste" };
      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
    });
    it('cadastrando um novo post - Deve retornar o status 201', async () => {
      Sinon.stub(serviceBlog, 'create').resolves(mock.controllerCreate);
      await controllerBlog.create(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
      expect(response.json.calledWith(mock.controllerCreate)).to.be.equal(true);
      Sinon.restore();
    });
  });

  describe('# Update', () => {
    before(function () {
      request.body = { corpo: "fazendo uma atualização de teste", blogId: 1 };
      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
    });
    it('Atualizando um novo post - Deve retornar o status 200', async () => {
      Sinon.stub(serviceBlog, 'update').resolves({
        UpdateBlog: {
          dataValues: {
            id: 32,
            corpo: 'fazendo uma atualização de teste',
            dataAtualizacao: '2022-08-31T17:31:37.393Z',
            ativo: true,
            blogId: 1
          },
        }
      });
      await controllerBlog.update(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith({
        UpdateBlog: {
          dataValues: {
            id: 32,
            corpo: 'fazendo uma atualização de teste',
            dataAtualizacao: '2022-08-31T17:31:37.393Z',
            ativo: true,
            blogId: 1
          },
        }
      })).to.be.equal(true);
      Sinon.restore();
    });
  });

  describe('# GetAll', () => {
    before(function () {
      request.body = { };
      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
    });
    it('Buscando todos os post - Deve retornar o status 200', async () => {
      Sinon.stub(serviceBlog, 'getAll').resolves(mock.returnGetAllService);

      await controllerBlog.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith(mock.returnGetAllService)).to.be.equal(true);
      Sinon.restore();
    });
  });

  describe('# GetOne', () => {
    before(function () {
      request.params = 1;
      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
    });
    it('Buscando um post - Deve retornar o status 200', async () => {
      Sinon.stub(serviceBlog, 'getOne').resolves(mock.controllerCreate);
      await controllerBlog.getOne(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      Sinon.restore();
    });
  });
});