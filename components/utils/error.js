function error(message,status){
    const e = new Error(message)
    e.statusCode = status ?  status : 500

    return e
}

module.exports = error