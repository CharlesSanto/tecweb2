# Projeto TecWeb 2

## Pré-requisitos

Antes da primeira execução, instale as dependências do projeto.

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd backend
npm install
```

---

## Executando o Projeto

Para que a aplicação funcione corretamente, é necessário iniciar três serviços em terminais separados.

### 1. Iniciar o Frontend

Abra um terminal, navegue até a pasta do frontend e execute a aplicação React.

```bash
cd frontend
npm run dev
```

---

### 2. Iniciar o Servidor Express

Abra um novo terminal, acesse a pasta do backend e inicie o servidor responsável por intermediar a comunicação entre o frontend e a camada de dados.

```bash
cd backend
npm run dev
```

---

### 3. Iniciar a Camada de Dados

Abra um terceiro terminal, navegue até a pasta do backend e execute o simulador de banco de dados. Este processo deve permanecer em execução para garantir a persistência dos dados no arquivo `db.json`.

```bash
cd backend
npm run db
```

---

## Acessando a Aplicação

Após iniciar todos os serviços, abra o navegador e acesse:

```text
http://localhost:5173
```

A aplicação estará disponível nesse endereço.

## Resumo dos Comandos

```bash
cd frontend
npm run dev

cd backend
npm run dev

cd backend
npm run db
```
