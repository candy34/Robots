const express = require('express')
const path = require('path')
const mustacheExpress = require('mustache-express');
const dal = require('./dal')
const app = express()
const data = require('./data.js')

app.engine('mustache', mustacheExpress())
app.set('views', __dirname + '/View')
app.set('view engine', 'mustache')

app.use(express.static('Public'))


app.get('/', function(request,response){
  const user = { name: 'Calvin'}
  const user2 = { name: 'Candace'}
  const userDal = dal.getUsers()
  
  response.render('data', {users: userDal})
})

app.get('/:id', function(request,response){
  const id =request.params.id
  console.log(id);
  console.log(request.params.id);
  const userDal = dal.getUser(id)
  //const userDal =data.users[request.params.id-1]
  console.log(userDal);
  response.render('user', {userDal: userDal})
  console.log('You Have Arrived');
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})




