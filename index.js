const express = require('express')
 
const app = express()
const port = 3000
 
app.use(express.json())

const USUARIO_EXEMPLO1 = {
  nome: 'José',
  sobrenome: 'Silva'
}

const USUARIO_EXEMPLO2 = {
  nome: 'Maria',
  sobrenome: 'Nilza'
}



const FAKER_USERS_DATABASE = [USUARIO_EXEMPLO1 , USUARIO_EXEMPLO2]

//Adiciona um Novo Usuário
app.post('/usuario', (req, res) =>{
  const newUser = req.body
  FAKER_USERS_DATABASE.push(newUser)
  res.send(newUser)

})

//Ler exibir as informaçãos de um Registro pelo ID 


app.get('/usuario/:id', (req, res) =>{
  const userID = req.params.id
  res.send(FAKER_USERS_DATABASE[userID])

})

//Ler exibir informações do registro completo.
app.get('/usuario', (req, res) =>{
  res.send(FAKER_USERS_DATABASE)
})


//Atualizar as informações do Registro
app.put('/usuario/:id', (req, res) => {
  const userID = req.params.id
  const oldUser = FAKER_USERS_DATABASE[userID]
  const newUser = req.body
  FAKER_USERS_DATABASE[userID] = {...oldUser,...newUser}
  res.send(FAKER_USERS_DATABASE[userID])

})
 
//Excluir informação de um registro e transformar em uma array vazia
app.delete('/usuario/:id', (req, res) => {
  const userID = req.params.id
  FAKER_USERS_DATABASE[userID] = {}
  res.send(FAKER_USERS_DATABASE[userID])

})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})