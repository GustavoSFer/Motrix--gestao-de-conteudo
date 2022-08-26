Cadastrando um novo post
caminho: * /blog *
necessario enviar as inforçaões:
{
  "titulo": "nome titulo",
  "corpo": "texto sobre o post"
}

Post salvo com sucesso no banco de dados, será retornado:
{
  "id": 14,
  "titulo": "teste",
  "dataCriacao": "2022-08-26T17:55:01.244Z",
  "corpo": "texto sobre o post"
}

Caso de erro, será retornado:
{
  "message": "mensagem do erro"
}

==========

Atualizando post
caminho: * /updateBlog *
necessario enviar as inforçaões:
{
  "corpo": "texto sobre o post"
  "blogId": 1 (obs: blogId é o id que se refere ao blog)
}

Post atualizado com sucesso, será retornado:
{
  "id": 18,
  "corpo": "fazendo uma atualização de teste",
  "dataAtualizacao": "2022-08-26T18:49:56.084Z",
  "ativo": true,
  "blogId": 1
}

Caso de erro, será retornado:
{
  "message": "mensagem do erro"
}


================

Buscando a ultima atualização de um post especifico
caminho: * /blog/:id * - passar o id do blog como parametro
necessario enviar as inforçaões:
http://localhost:3001/blog/14

Será retornado a utima atualização:
{
  "id": 18,
  "corpo": "fazendo uma atualização de teste",
  "dataAtualizacao": "2022-08-26T18:49:56.000Z",
  "blogId": 14,
  "ativo": true,
  "Blog": {
    "id": 14,
    "titulo": "teste",
    "dataCriacao": "2022-08-26T17:55:01.000Z"
  }
}

Caso de erro, será retornado:
{
  "message": "mensagem do erro"
}

============

Colocando uma atualização de um blog especifico para "desativado"
caminho: * /updateBlog/:id * - passar o id do blog como parametro

Obs: Não é removido do banco de dados, apenas setado para false.


============

"Desativado" todas as atualizações de um blog
caminho: * /blog/:id * - passar o id do blog como parametro

Obs: Não é removido do banco de dados, apenas setado para false.