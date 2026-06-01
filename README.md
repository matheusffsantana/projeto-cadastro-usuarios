# 📋 Projeto Cadastro de Usuários

Sistema de gerenciamento de usuários com operações CRUD completas, desenvolvido com Node.js no backend e HTML/CSS/JavaScript puro no frontend.

---

## 🚀 Tecnologias Utilizadas

**Backend**
- [Node.js](https://nodejs.org/)
- [Fastify](https://fastify.dev/) — framework web
- [Neon](https://neon.tech/) — banco de dados PostgreSQL serverless
- [@neondatabase/serverless](https://github.com/neondatabase/serverless) — client SQL
- [bcrypt](https://www.npmjs.com/package/bcrypt) — criptografia de senhas
- [dotenv](https://www.npmjs.com/package/dotenv) — variáveis de ambiente

**Frontend**
- HTML5
- CSS3
- JavaScript (Fetch API)

---

## ⚙️ Funcionalidades

- ✅ Listar todos os usuários
- ✅ Cadastrar novo usuário com senha criptografada
- ✅ Editar usuário existente
- ✅ Excluir usuário
- ✅ Feedback visual de sucesso nas ações

---

## 🗂️ Estrutura do Projeto

```
projeto-cadastro-usuarios/
├── BackEnd/
│   ├── src/
│   │   ├── controller/
│   │   │   └── users.controller.js
│   │   ├── repository/
│   │   │   └── users.repository.js
│   │   ├── routes/
│   │   │   └── users.routes.js
│   │   └── server.js
│   ├── .env               # não versionado
│   ├── .gitignore
│   └── package.json
└── FrontEnd/
    ├── index.html
    ├── styles.css
    └── app.js
```

---

## 🔧 Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado
- Conta no [Neon](https://neon.tech/) com um banco PostgreSQL criado

### 1. Clone o repositório
```bash
git clone https://github.com/matheusffsantana/projeto-cadastro-usuarios.git
```

### 2. Configure o Backend
```bash
cd BackEnd
npm install
```

Crie um arquivo `.env` na pasta `BackEnd` com sua connection string do Neon:
```
DATABASE_URL=sua_connection_string_aqui
```

### 3. Inicie o servidor
```bash
npm start
```
O servidor estará disponível em `http://localhost:3000`

### 4. Abra o Frontend

Abra o arquivo `FrontEnd/index.html` no navegador ou use a extensão **Live Server** do VS Code.

---

## 🛣️ Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/users/getAllUsers` | Lista todos os usuários |
| POST | `/users/createUser` | Cria um novo usuário |
| PUT | `/users/updateUser/:id` | Atualiza um usuário |
| DELETE | `/users/deleteUser/:id` | Remove um usuário |

---

## 🔒 Segurança

- Senhas armazenadas com hash via **bcrypt**
- Credenciais do banco protegidas via variáveis de ambiente (`.env`)

---

## 👨‍💻 Autor

**Matheus Santana**  
[GitHub](https://github.com/matheusffsantana) • [LinkedIn](https://www.linkedin.com/in/matheusffsantana/)

---

## 📌 Próximos Passos

- [ ] Autenticação com JWT
- [ ] Validações de formulário no frontend
- [ ] Paginação na listagem de usuários
