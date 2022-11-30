const { PrismaClient } = require('@prisma/client')
const { json } = require('body-parser')
const exp = require('constants')
const { render } = require('ejs')
const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const prisma = new PrismaClient()
async function consulta() {
  var times = ""
  var times = prisma.selecoes.findMany().then(times => {
    return times
  })
  
}

const selecoes = consulta()
console.log(selecoes)


app.set('view engine','ejs');
app.use(express.static(__dirname,+'/public'));


app.get('/', async (req, res) => {
  var times = await prisma.selecoes.findMany();
  res.render('index', {selecoes: JSON.parse(JSON.stringify(times))});
  //res.send()
  console.log(times)
});