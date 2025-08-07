# Task Manager API

## 📋 Objetivo do Projeto

Criar uma API RESTful para gerenciar tarefas, permitindo operações de **criação, leitura, atualização e exclusão (CRUD)**.

---

## 🚀 Funcionalidades

- **POST /tasks**: Cria uma nova tarefa.
- **GET /tasks**: Retorna todas as tarefas.
- **GET /tasks/:id**: Retorna uma tarefa específica por ID.
- **PUT /tasks/:id**: Atualiza uma tarefa existente por ID.
- **DELETE /tasks/:id**: Exclui uma tarefa por ID.

---

## 🗂️ Estrutura do Projeto

- **Node.js** com **Express.js** para o servidor web
- **TypeScript** para tipagem estática
- Separação de responsabilidades: controllers, services, repositories
- Tratamento de erros centralizado

---

## 📖 Guia do Usuário

### URL Base

```
http://localhost:3000
```

_A porta pode variar se a variável de ambiente `PORT` for definida._

---

### 📌 Endpoints

#### Criar uma nova tarefa

- **Método:** `POST`
- **Endpoint:** `/tasks`
- **Corpo da Requisição:**
  ```json
  {
    "title": "Comprar pão",
    "description": "Ir ao mercado e comprar pão integral",
    "completed": false,
    "createdAt": "2025-07-03T10:00:00Z"
  }
  ```
- **Resposta de Sucesso:** `HTTP 200 OK` com a nova tarefa criada.

---

#### Listar todas as tarefas

- **Método:** `GET`
- **Endpoint:** `/tasks`
- **Resposta de Sucesso:** `HTTP 200 OK` com uma lista de todas as tarefas.

---

#### Obter uma tarefa específica

- **Método:** `GET`
- **Endpoint:** `/tasks/:id`
- **Resposta de Sucesso:** `HTTP 200 OK` com os dados da tarefa.
- **Resposta de Erro:** `HTTP 404 Not Found` se a tarefa não for encontrada.

---

#### Atualizar uma tarefa

- **Método:** `PUT`
- **Endpoint:** `/tasks/:id`
- **Corpo da Requisição:**
  ```json
  {
    "title": "Comprar pão e leite",
    "description": "Ir ao mercado e comprar pão integral e leite",
    "completed": true
  }
  ```
- **Resposta de Sucesso:** `HTTP 200 OK` com a tarefa atualizada.
- **Resposta de Erro:** `HTTP 404 Not Found` se a tarefa não for encontrada.

---

#### Excluir uma tarefa

- **Método:** `DELETE`
- **Endpoint:** `/tasks/:id`
- **Resposta de Sucesso:** `HTTP 200 OK` com a lista de tarefas restante.
- **Resposta de Erro:** `HTTP 404 Not Found` se a tarefa não for encontrada.

---

# Task Manager API (English)

## 📋 Project Objective

Create a RESTful API to manage tasks, allowing **create, read, update, and delete (CRUD)** operations.

---

## 🚀 Features

- **POST /tasks**: Creates a new task.
- **GET /tasks**: Returns all tasks.
- **GET /tasks/:id**: Returns a specific task by ID.
- **PUT /tasks/:id**: Updates an existing task by ID.
- **DELETE /tasks/:id**: Deletes a task by ID.

---

## 🗂️ Project Structure

- **Node.js** with **Express.js** for the web server
- **TypeScript** for static typing
- Separation of concerns: controllers, services, repositories
- Centralized error handling

---

## 📝 User Manual (English)

### Base URL

```
http://localhost:3000
```

_The port may vary if the `PORT` environment variable is set._

---

### Endpoints

#### Create a new task

- **Method:** `POST`
- **Endpoint:** `/tasks`
- **Request Body:**
  ```json
  {
    "title": "Buy bread",
    "description": "Go to the market and buy whole wheat bread",
    "completed": false,
    "createdAt": "2025-07-03T10:00:00Z"
  }
  ```
- **Success Response:** `HTTP 200 OK` with the newly created task.  
  `400 Bad Request` if the title is missing.

---

#### List all tasks

- **Method:** `GET`
- **Endpoint:** `/tasks`
- **Success Response:** `HTTP 200 OK` with a list of all tasks.

---

#### Get a specific task

- **Method:** `GET`
- **Endpoint:** `/tasks/:id`
- **Success Response:** `HTTP 200 OK` with the task's data.
- **Error Response:** `HTTP 404 Not Found` if the task is not found.

---

#### Update a task

- **Method:** `PUT`
- **Endpoint:** `/tasks/:id`
- **Request Body:**
  ```json
  {
    "title": "Buy bread and milk",
    "description": "Go to the market and buy whole wheat bread and milk",
    "completed": true
  }
  ```
- **Success Response:** `HTTP 200 OK` with the updated task.
- **Error Response:** `HTTP 404 Not Found` if the task is not found.

---

#### Delete a task

- **Method:** `DELETE`
- **Endpoint:** `/tasks/:id`
- **Success Response:** `HTTP 200 OK` with the remaining task list.
- **Error Response:** `HTTP 404 Not Found` if the task is not found.

---

## 📦 Instalação

```bash
git clone https://github.com/Hyrat16/-Node-js-Express-study-API-project.git
cd -Node-js-Express-study-API-project
npm install
cp .env.example .env
npm run dev
```

---

## 🛠️ Tecnologias

- Node.js
- Express.js
- TypeScript

---
