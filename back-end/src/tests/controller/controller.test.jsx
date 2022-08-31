const { expect } = require('chai');
const Sinon = require('sinon');
const serviceBlog = require('../../service/BlogService');
const controllerBlog = require('../../controller/BlogController');
const mock = require('../Mock');

describe('# Controller', () => {
  const response = {};
  const request = {};
  before(function () {
    request.body = { };
    response.status = Sinon.stub().returns(response);
    response.json = Sinon.stub().returns();
  });

  describe('# Create', () => {
    it('cadastrando um novo post - Deve retornar o status 201', async () => {
      Sinon.stub(serviceBlog, 'create').resolves(mock.controllerCreate);
      await controllerBlog.create(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
      Sinon.restore();
    });
  });
});