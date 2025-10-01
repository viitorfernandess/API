import express, { json } from 'express'
// server.js
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();


const app = express()
app.use(express.json())

const users = []

// rota padrão
app.get('/', (req, res) => {
  res.send('Olá, mundo!')
})

app.post('/users', async (req, res) => {

  await prisma.user.create({
    email: req.body.email,
    name: req.body.name,
    age: req.body.age
  })

  res.status(201),json(req.body)
})

// rota /users
app.get('/users', (req, res) => {
  res.status(200).json(users)
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
})


// Criar API de usuários


// senha: Z0mGhiYdGTezxfcn