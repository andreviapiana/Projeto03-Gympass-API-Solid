<p align="center">
  <h1 align="center">Gympass API - Node.js :rocket:</h1>
</p>

<p align="center" margin-top="25px" >
  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/andreviapiana/Projeto03-Gympass-API-Solid" />

  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/andreviapiana/Projeto03-Gympass-API-Solid" />
</p>


Gympass API é uma API desenvolvida em Node.js para o usuário realizar check-in em academias.

___

## 💻 Sobre
A ideia deste projeto é criar uma API para registrar o check-in do usuário em academias próximas através da sua localização de GPS.

Essa API permite a criação de usuários, além da realização de Login, a criação de check-ins e a criação de academias(caso seja administrador da aplicação). Todo o controle de usuários é feito por meio de Tokens de Autenticação usando ainda Refresh Token.

___

## 🛠 Tecnologias

As seguintes tecnologias foram empregadas na criação deste projeto:

- [Node.js](https://nodejs.org/en)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Fastify](https://www.npmjs.com/package/fastify)
- [Fastify Cookie](https://www.npmjs.com/package/@fastify/cookie)
- [Zod](https://www.npmjs.com/package/zod)
- [Vitest](https://vitest.dev/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [Tsup](https://tsup.egoist.dev/)
- [Prisma](https://www.prisma.io/)

___

## 🚀 Regras da Aplicação

#### RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter o seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

#### RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após ser criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores;

#### RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);

___

## 🚀 Como utilizar

Clone o projeto para o local desejado em seu computador.

```bash
$ git clone git@github.com:andreviapiana/Projeto03-Gympass-API-Solid.git
```
___

#### 🚧 Executando a Aplicação
```bash

# Navegue até o diretório
$ cd Projeto03-Gympass-API-Solid

# Instale as dependências necessárias
$ npm install

# Execute as Migrations para criar o Banco de Dados
$ npx prisma migrate dev

# Agora inicie a API
$ npm run dev

```

#### 🚧 Instalando o Banco de Dados Local
```bash

# Instale o Docker Desktop em seu computador através deste link
$ https://docs.docker.com/desktop/install/windows-install/

# Abra um novo terminal(sem fechar o terminal do passo anterior) e navegue até o diretório
$ cd Projeto03-Gympass-API-Solid

# Abra um novo terminal e execute o seguinte código para instalar o Banco(o Docker deve estar instalado e em execução)
$ docker compose up -d

# No deu Docker será instalado o Banco de Dados desta aplicação.
# Com o Banco do Docker em execução e a API em execução, basta realizar as requisições pelo Insomnia.

```

___

## 📇 Insomnia da API

Instale o [Insomnia](https://insomnia.rest/download), e então clique no botão a seguir para abrir as requisições já configuradas.
Ao fazer a primeira requisição pode ser que o tempo limite seja atingido, pois o servidor gratuito pode demorar 1 minuto para startar.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Gympass-API-Solid&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fandreviapiana%2FProjeto03-Gympass-API-Solid%2Fmaster%2Fexport%3Ftoken%3DGHSAT0AAAAAACFDS6KMMHVECV6EDCDCZNKEZKL2LHQ)

___

## 🔀 Rotas da API

- Criar Novo Usuário
```bash
POST /users
```

- Autenticação/Login
```bash
POST /sessions
```

- Refresh Token
```bash
PATCH /token/refresh
```

- Exibir o perfil do Usuário
```bash
GET /me
```

- Criar uma Academia (somente Admin)
```bash
POST /gyms
```

___

## 📚 Testes automatizados

```bash
# A API possuí diversos testes. Após a instalação do projeto e suas depêndencias:
  npm run test
```

___

Made with ❤️ by André Viapiana 👋🏽 [Get in Touch!](https://www.linkedin.com/in/andreviapiana/)

---

