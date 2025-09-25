import express from 'express'

const app = express()

// rota padrão
app.get('/', (req, res) => {
  res.send('Olá, mundo!')
})

// rota /users
app.get('/users', (req, res) => {
  res.send('Lista de usuários')
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
})


// Criar API de usuários