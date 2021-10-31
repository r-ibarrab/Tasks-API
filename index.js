const express = require('express')
const chalk = require('chalk')
const Api = require('./components/index')
const { urlencoded } = require('express')
require('dotenv/config')

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send('hello')
})

app.use('/api/v1',Api)



app.listen(port,e=>{
    if(e) return console.log(chalk.red("Error:"),e)
    console.log(chalk.green('Server running on port:'),chalk.yellow(port))
})