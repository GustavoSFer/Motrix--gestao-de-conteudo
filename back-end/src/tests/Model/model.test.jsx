const sinon = require('sinon');
const { expect } = require('chai');
const { responseCreate, bodyCreate } = require('../Mock');
const { Blog } = require('../../../models');
const {  UpdateBlog } = require('../../../models/updateblog');
const blogModel = require('../../models/BlogModel');

describe('#Blog Model', () => {
  beforeEach(() => sinon.restore());
  describe('# Função Create', () => {
    it('Cadastrando novo post', async () => {
      sinon.stub(Blog, 'create').resolves(responseCreate);
      const result = await blogModel.create('realização de teste', 'fazendo uma atualização de teste');

      console.log('>>>>', result);
      expect(result).to.be.equal(responseCreate);
    });
  });
});
