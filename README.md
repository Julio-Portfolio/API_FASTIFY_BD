# API com Fastify e Banco de Dados

## Objetivo

Esta API foi desenvolvida com **Fastify** e tem como objetivo se comunicar com um banco de dados, realizando operações **CRUD** (Criar, Ler, Atualizar e Excluir) utilizando os métodos **GET**, **POST**, **PUT** e **DELETE**.

A comunicação com o banco de dados é feita através de plugins nativos do Fastify.

**Documentação do Fastify:**  
[Fastify Database Guide](https://www.fastify.io/docs/latest/Guides/Database/)

## Sobre a API

A **API_FastifyComBD** tem como finalidade executar operações CRUD completas em um banco de dados. A API foi construída inteiramente em **JavaScript**, utilizando o framework **Fastify** para gerenciamento das rotas.

Este é um exemplo de uma **API mínima (Minimum API)**, focada na simplicidade e eficiência.

## Endpoints

A base da API está disponível em:  
**`http://localhost:3000/products`**

### Rotas disponíveis:

1. **Listar todos os produtos cadastrados**  
   **Método**: GET  
   **Endpoint**: `/products`  
   **Exemplo**:  
   `http://localhost:3000/products`

2. **Selecionar o produto cadastrado por ID**  
   **Método**: GET  
   **Endpoint**: `/products/:id`  
   **Exemplo**:  
   `http://localhost:3000/products/1`

3. **Alterar um produto cadastrado por ID**  
   **Método**: PUT  
   **Endpoint**: `/products/:id`  
   **Exemplo**:  
   `http://localhost:3000/products/1`

4. **Excluir um produto cadastrado por ID**  
   **Método**: DELETE  
   **Endpoint**: `/products/:id`  
   **Exemplo**:  
   `http://localhost:3000/products/1`

5. **Inserir um novo produto**  
   **Método**: POST  
   **Endpoint**: `/products`  
   **Exemplo**:  
   `http://localhost:3000/products`

### Exemplo de resposta (JSON)

A resposta para as requisições, como a consulta de um produto, será um arquivo JSON com os seguintes campos:

```json
{
  "id": 1,
  "nome": "Camiseta Online Tam:Pm",
  "price": "46"
}
