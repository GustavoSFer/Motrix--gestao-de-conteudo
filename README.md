# Bem vindo!
### App - Motrix

## Tecnologias utilizadas
- React
- React-router-dom
- Dotenv
- React test library
- Axios
- Node.js
- Express
- MySql
- Sequelize
- Mocha | Chai | Sinon.js | RTL

## Objetivo do projeto:
  * Criar uma aplicação de gestão de conteúdos.
  * Que seja possíver Criar, editar, listar, visualizar e apagar conteúdos.
  * Visualizar o histórico de modificações de cada conteúdo.
<br><br><br>

![Captura de tela de 2022-09-01 15-13-24](https://user-images.githubusercontent.com/71854204/187984274-2c4602a5-77f8-46a3-b4f7-44be296226d5.png)

<br><br><br>

  # Instruções para iniciar o projeto
  1 - Clone o repositório
  * Chave SSH
    * git clone git@github.com:GustavoSFer/Motrix--gestao-de-conteudo.git

  * Chave HTTPS
    * git clone https://github.com/GustavoSFer/Motrix--gestao-de-conteudo.git

  * Entre na pasta do repositório que você acabou de clonar:
    * cd Motrix--gestao-de-conteudo

2 - Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * npm install
  
  * Inicialize o projeto: `obs: antes de inicializar faça as configurações do banco`
    * npm start - `Caso não abrir a pagina no nagevar, inicie separado`
      * cd banck-end 
      ``` npm start```
      * cd front-end 
      ``` npm start```

<br><br>

## Conexão com o Banco:

**⚠️ IMPORTANTE! ⚠️**
* Faça as configurações necessarias no Back End, para a API rodar corretamente.

Na raiz do projeto **renomeie o arquivo `.env.example` para `.env`** com as variáveis de ambiente. Informe seus dados do banco nas variaveis.
Por exemplo, caso o seu usuário SQL seja `nome` e a senha `1234` seu arquivo ficará desta forma:

```sh
MYSQL_HOST=localhost
MYSQL_USER=nome
MYSQL_PASSWORD=1234
PORT=3001
```
### Para saber os metodos e retorno da API, entrar no README do back end. link: https://github.com/GustavoSFer/Motrix--gestao-de-conteudo/tree/master/back-end

<br><br>

# Sequelize

<br>

### Criar banco de dados:
```npx sequelize db:create```

### Criar tabelas:
```npx sequelize db:migrate```

<br><br>


## Conexão com o Front End e o Back End:

**⚠️ IMPORTANTE! ⚠️**

Crie um arquivo .env e informe nele a URL do banco 
```
REACT_APP_API_URL=
```
Se não for informado, por padão será utilizado
**`http://localhost:3001`** 

Dentro da pasta `Service` que é informado o banco.

<br>

## Rodando os teste do projeto
  * Teste Front-end
    * npm run test:front
  * Teste Back-end
    * npm run test:back
