// const sinon = require('sinon');
// const { expect } = require('chai');
// const mock = require('../Mock');
// const { Blog } = require('../../../models');
// const {  UpdateBlog } = require('../../../models/updateblog');
// const blogModel = require('../../models/BlogModel');

// describe('#Blog Model', () => {
//   beforeEach(() => sinon.restore());
//   describe('# Função Create', () => {
//     it('Cadastrando novo post', async () => {
//       sinon.stub(Blog, 'create').resolves(mock.responseCreate);
//       sinon.stub(UpdateBlog, 'create').resolves({
//         UpdateBlog: {
//           dataValues: {
//             id: 29,
//             corpo: 'fazendo uma atualização de teste',
//             dataAtualizacao: '2022-08-31T14:29:51.688Z',
//             ativo: true,
//             blogId: 10
//           },
//         }
//       }
//       );
//       const result = await blogModel.create('realização de teste', 'fazendo uma atualização de teste');

//       console.log('>>>>', result);
//       expect(result).to.be.equal({ id: 9,
//         titulo: 'realização de teste',
//         dataCriacao: '2022-08-31T14:23:05.050Z',
//         ativo: true,
//         corpo: 'fazendo uma atualização de teste'
//       });
//     });
//   });


//   describe('# Update', () => {
//     it('Realizando uma atualização em um post', async () => {
//       sinon.stub(UpdateBlog, 'create').resolves(mock.update);
//       const blogUpdate = await blogModel.update('fazendo uma atualização de teste', 1);

//       expect(blogUpdate).to.be.equal(mock.update);
//     });
//   });


// });
