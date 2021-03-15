//importa os módulos http e express, que são as bibliotecas que serão usadas
const http = require("http");
const express = require("express");
//constrói um objeto express, que faz a automação do http
const app = express();
//importa o body-parser, transforma o json em registros no sistema
const bodyParser = require("body-parser");
app.use(bodyParser.json());
//configura a porta do servidor e o coloca em execução.
const porta = 3000;
app.set("port", porta);
const server = http.createServer(app);
server.listen(3000);

//criamos os alunos aqui por que não tem o baco de dados ainda
let id = 2;
let alunos = [
  {
    id: 1,
    nome: "João",
    fone: "11223344",
    email: "joao@email.com",
  },
  {
    id: 2,
    nome: "Maria",
    fone: "55221133",
    email: "maria@email.com",
  },
];
let alunos2 = [];

//tratamento de requisições POST
app.post("/alunos", (req, res, next) => {
  const aluno = {
    id: (id += 1),
    nome: req.body.nome,
    fone: req.body.fone,
    email: req.body.email,
  };
  alunos.push(aluno);
  res.status(201).json(aluno);
});

//tratamento de requisições GET
app.get("/alunos", (req, res, next) => {
  res.status(200).json(alunos);
});

//tratamento de requisições PUT
app.put("/alunos", (req, res, next) => {
  alunos.forEach((aluno) => {
    if (aluno.id === req.body.id) {
      aluno.nome = req.body.nome;
      aluno.fone = req.body.fone;
      aluno.email = req.body.email;
    }
  });
  res.status(204).end();
});

//tratamento de requisições DELETE
app.delete("/alunos", (req, res, next) => {
  alunos.forEach((aluno) => {
    if (aluno.id != req.body.id) {
      const aluno2 = {
        id: alunos.id,
        nome: alunos.nome,
        fone: alunos.fone,
        email: alunos.email,
      };
      alunos2.push(aluno2);
    }
  });
  alunos = alunos2;
  res.status(204).end();
});
