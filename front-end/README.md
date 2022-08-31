# Front-End
 
## TECNOLOGIAS UTILIZADOS
<ul>
  <li>React</li>
  <li>React-router-dom</li>
  <li>Dotenv</li>
  <li>React test library</li>
  <li>Axios</li>
</ul>

## Utilizando o projeto com o Docker

1. Crie a imagem no docker
  * docker build -t <'NomeDaImagem'> <'LocalOndeestaODockerFile'>
  * Exemplo
``` docker build -t msb . ```
2. Crie o container no docker
  * docker container run -p 3000:3000 <'NomeDaImagem'>
  * Exemplo
``` docker container run -p 3001:3001 msb ```

## Observação: Banco de dados Utilizado no projeto MySQL. Certifique-se que ja tenha em seu computador ou rodando em um container Docker
 -- Link: https://hub.docker.com/_/mysql

## Configurando variavel de ambiente API
  * Crie um arquivo .env e informe nele a URL do banco
  ``` REACT_APP_API_URL=https://.... ```
Se não foi informado por padão será utilizado 'http://localhost:3001'