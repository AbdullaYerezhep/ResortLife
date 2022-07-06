const express = require('express')
const bodyParser = require('body-parser')
const slider = require(__dirname +'/slider.js')

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('home',{})
})

app.get('/tours', (req, res)=>{
    res.render('/tours',{})
})

app.get('about', (req,res)=>{
    res.render('/about',{})
})

app.listen('4000', (req, res)=>console.log('Server is running on port 4000'))