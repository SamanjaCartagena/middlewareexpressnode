const express = require('express')
const app = express()

app.use(logger)

app.get('/',  (req,res) => {
    console.log('Home')
    res.send('Home Page')
})

app.get('/users', auth, (req,res) => {
    console.log(`User is admin =${req.admin}`)
    console.log('Users Page')
    res.send('Users Page')
})
app.get('/blog', (req,res) => {
    console.log('bloggers Page')
    res.send('bloggers Page')
})
function logger(req, res, next){
    console.log('Log')
    next()
}

function auth(req,res, next) {
    if(req.query.admin ==='true'){
        req.admin = true
        next()
    }else{
        res.send('No auth')
    }
    console.log('Auth')
    next()
}

app.listen(4000);