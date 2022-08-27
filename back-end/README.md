Cadastrando um novo post
caminho: * /blog *
METODO: POST
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
METODO: POST - 'porque não é atualizado e sim criado um novo documento na tabela de atualização'
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

Buscando um post e retornando o post com suas atualizações
caminho: * /blog * - passar o id do blog como parametro
METODO: GET

Será retornado:
[
  {
    "id": 1,
    "titulo": "primeiro",
    "dataCriacao": "2022-07-25T00:00:00.000Z",
    "UpdateBlogs": [
      {
        "id": 3,
        "corpo": "mais uma para teste",
        "dataAtualizacao": "2022-07-29T00:00:00.000Z",
        "blogId": 1,
        "ativo": false,
        "BlogId": 1
      },
      {
        "id": 2,
        "corpo": "informaçoesjfd fdj teste",
        "dataAtualizacao": "2022-07-28T00:00:00.000Z",
        "blogId": 1,
        "ativo": true,
        "BlogId": 1
      },
      {
        "id": 1,
        "corpo": "informaçoes de teste",
        "dataAtualizacao": "2022-07-25T00:00:00.000Z",
        "blogId": 1,
        "ativo": true,
        "BlogId": 1
      }
    ]
  },
  {
    "id": 2,
    "titulo": "segundo",
    "dataCriacao": "2022-07-26T00:00:00.000Z",
    "UpdateBlogs": [
      {
        "id": 4,
        "corpo": "informaçoesjfd fdj teste",
        "dataAtualizacao": "2022-07-25T00:00:00.000Z",
        "blogId": 2,
        "ativo": true,
        "BlogId": 2
      }
    ]
  }
]

Caso de erro, será retornado:
{
  "message": "mensagem do erro"
}

============

Colocando uma atualização de um blog especifico para "desativado"
caminho: * /updateBlog/:id * - passar o id do blog como parametro
METODO: PATCH
Obs: Não é removido do banco de dados, apenas setado para false.


============

"Desativado" todas as atualizações de um blog
caminho: * /blog/:id * - passar o id do blog como parametro
METODO: PATCH

Obs: Não é removido do banco de dados, apenas setado para false.