const { json } = require('body-parser')
const exp = require('constants')
const { render } = require('ejs')
const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');
app.use(express.static(__dirname,+'/public'));
app.use('/', function(req,res,next){
    res.render('index')
    next()
})

app.get('/', (req, res) => {
  console.log("Render working")
  res.send()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



