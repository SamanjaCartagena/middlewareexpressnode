const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('Home Page')
})

app.get('/users', (req,res) => {
    res.send('Users Page')
})
function logger(req, res, next){
    console.log('Log')
}

app.listen(4000);