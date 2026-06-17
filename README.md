# Meu projeto Tecweb2

## Pré-requisitos de Instalação

Abra o terminal nas respectivas pastas e instale as dependências antes da primeira execução:

cd frontend
npm install

cd backend
npm install

### 1. Inicializar a Camada de Dados (Terminal 1)

Navegue até a pasta do backend e inicie o simulador de banco de dados. Este processo deve permanecer ativo para que os dados sejam salvos no arquivo `db.json`.

cd backend
npx json-server --watch db.json --port 3001

### 2. Inicializar o Servidor Express (Terminal 2)

Abra um novo terminal, navegue até a pasta do backend e inicie o proxy que fará a ponte entre a interface e os dados.

cd backend
npm run dev

### 3. Inicializar a Interface Frontend (Terminal 3)

Abra o terceiro terminal, navegue até a pasta do frontend e inicie a aplicação React.

cd frontend
npm run dev

Após os três serviços estarem em execução, acesse a aplicação pelo navegador no endereço `http://localhost:5173`.