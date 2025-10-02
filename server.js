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
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age
      }
    })
    res.status(201).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar usuário' })
  }
})


// rota /users
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar usuários' })
  }
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
})


// Criar API de usuários


// senha: Z0mGhiYdGTezxfcn