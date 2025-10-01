import express from 'express'

const app = express()
app.use(express.json())

const users = []

// rota padrão
app.get('/', (req, res) => {
  res.send('Olá, mundo!')
})

app.post('/users', (req, res) => {

  users.push(req.body)

  res.send('Ok, deu certo')
})

// rota /users
app.get('/users', (req, res) => {
  res.json(users)
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
})


// Criar API de usuários