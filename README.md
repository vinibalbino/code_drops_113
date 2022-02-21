# Code drops 113

### Dependência

Para executar o projeto é necessário a utilização de:

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

Clone o repositório:

```bash
git clone https://github.com/vinibalbino/code_drops_113.git && cd code_drops_113
```

Faça o build das imagens Docker utilizadas no projeto e inicie os containers da aplicação

```bash
docker-compose up -d
```

Logo apos terminar execute o comando para instalar as dependencias e rodar as migrations:

```bash
yarn && yarn typeorm migration:run
```

crie um arquivo chamado .env na raiz do seu projeto com os dados que estão no .env.example e para rodar o projeto e so

```bash
yarn run dev
```
