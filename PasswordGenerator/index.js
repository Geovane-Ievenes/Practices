require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname + '/views'));

const PORT = process.env.PORT

app.get('/', function(req, res){
    res.render('index')
})

app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`);
})