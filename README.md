# To-Do-List_PSO

## Descrição

O projeto é um gerenciador de tarefas que permite adicionar e remover tarefas de uma lista. Foi desenvolvido para ser simples e eficiente, oferecendo uma interface intuitiva para o gerenciamento de tarefas.

## Tecnologias Utilizadas

- **Frontend**
  - React
  - SASS
  - Zod

- **Backend**
  - TypeScript
  - Node.js
  - Express
  - Prisma
  - Zod
  - MySQL
  - Jest

## Configuração de Instalação

### Pré-requisitos

- Node.js
- MySQL

### Instalação

1. **Clone o repositório**
    ```bash
    git clone git@github.com:andreycaetano/to-do-list_PSO.git
    ```

2. **Acesse a pasta do projeto**
    ```bash
    cd to-do-list_PSO
    ```

3. **Acesse a pasta do backend**
    ```bash
    cd backend
    ```

4. **Crie um arquivo `.env` com base nas informações do arquivo `.env.example` e preencha as variáveis `PORT` e `DATABASE_URL`**
    ```bash
    PORT=
    DATABASE_URL=
    ```

5. **Instale as dependências e inicie o backend**
    ```bash
    npm install
    npm run dev
    ```

6. **Em outro terminal, vá até a pasta do frontend e inicie a aplicação**
    ```bash
    cd ../frontend
    npm install
    npm run dev
    ```

## Testes

1. **Acesse a pasta do backend**
    ```bash
    cd backend
    ```

2. **Execute o comando de testes**
    ```bash
    npm run test
    ```

## Documentação da API

#### Criar uma task

```http
  Post /tasks/
```

| Requisição   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. O title da task |

#### Retorna todos as tasks

```http
  GET /tasks
```

#### Deleta uma task

```http
  Delete /tasks/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |


