## API

## TECNOLOGIAS UTILIZADOS
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Dotenv</li>
  <li>MySql</li>
  <li>Mocha | Chai | Sinon.js </li>
</ul>

## Utilizando o projeto com o Docker

1. Crie a imagem no docker
  * docker build -t <'NomeDaImagem'> <'LocalOndeestaODockerFile'>
  * Exemplo
``` docker build -t msb . ```
2. Crie o container no docker
  * docker container run -p 3001:3001 <'NomeDaImagem'>
  * Exemplo
``` docker container run -p 3001:3001 msb ```

## Observação: Banco de dados Utilizado no projeto MySQL. Certifique-se que ja tenha em seu computador ou rodando em um container Docker
 -- Link: https://hub.docker.com/_/mysql


### Conexão com o Banco:

**⚠️ IMPORTANTE! ⚠️**

```javascript
const connection = mysql.createPool({
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
});
```
Para os testes rodarem corretamente, na raiz do projeto **renomeie o arquivo `.env.example` para `.env`** com as variáveis de ambiente. Por exemplo, caso o seu usuário SQL seja `nome` e a senha `1234` seu arquivo ficará desta forma:

```sh
MYSQL_HOST=localhost
MYSQL_USER=nome
MYSQL_PASSWORD=1234
PORT=3001
```

# Informações sobre a API

1. Cadastrando um novo post
  - Caminho: **/blog**
  - METODO: POST
    * Necessario enviar as inforçaões:

    ```
      {
        "titulo": "nome titulo",
        "corpo": "texto sobre o post"
      }
    ```

    * Post salvo com sucesso no banco de dados, será retornado:
    ```
      {
        "id": 14,
        "titulo": "teste",
        "dataCriacao": "2022-08-26T17:55:01.244Z",
        "corpo": "texto sobre o post"
      }
    ```

    * Caso de erro, será retornado:
    ```
      {
        "message": "mensagem do erro"
      }
    ```

==========

2. Atualizando post
  - Caminho: **/updateBlog**
  - METODO: POST - 'porque não é atualizado e sim criado um novo documento na tabela de atualização'

    * Necessario enviar as inforçaões:
    ```
      {
        "corpo": "texto sobre o post"
        "blogId": 1 (obs: blogId é o id que se refere ao blog)
      }
    ```

    * Post atualizado com sucesso, será retornado:
    ```
      {
        "id": 18,
        "corpo": "fazendo uma atualização de teste",
        "dataAtualizacao": "2022-08-26T18:49:56.084Z",
        "ativo": true,
        "blogId": 1
      }
    ```

    * Caso de erro, será retornado:
    ```
    {
      "message": "mensagem do erro"
    }
    ```


================

3. Buscando um post e retornando o post com suas atualizações
  - Caminho: **/blog** - passar o id do blog como **`parametro`**
  - METODO: GET

    * Será retornado:
    ```
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
    ```

    * Caso de erro, será retornado:
    ```
    {
      "message": "mensagem do erro"
    }
    ```

============

4. Colocando uma atualização de um blog especifico para "desativado"
  - Caminho: **/updateBlog/:id** - passar o id do blog como **`parametro`**
  - METODO: PATCH
    * Obs: Não é removido do banco de dados, apenas setado para false.


============

5. "Desativando" todas as atualizações de um blog
  - Caminho: **/blog/:id** - passar o id do blog como parametro
   - METODO: PATCH
      * Obs: Não é removido do banco de dados, apenas setado para false.