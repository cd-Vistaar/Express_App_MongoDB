const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const port = 3001

const route = require('./routes/route')

//Connect Mongodb
mongoose.connect("mongodb+srv://m001-student:mdb123@cluster0.usrjexb.mongodb.net/mydb",{useNewUrlParser:true})
.then(()=>console.log("connection successfull...."))
.catch((err)=>console.log(err))



app.use(express.static(path.join(__dirname, 'public')))

//Routing

app.use(route)

//Templating Engine
app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'))
})

//student routing 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

