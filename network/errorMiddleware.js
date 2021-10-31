const chalk = require('chalk')
const response = require("./response")

function errorMiddleware(error,req,res){
    console.log('AYUDA CULEROS')
    console.log(chalk.red("[SERVER] Error:",error))

    response.error(req,res,error.message,error.statusCode)
}

module.exports = errorMiddleware