function success(req,res,message,status){
    const body = message ? message : "Success"
    const code = status ? status : 200

    res.status(code).json({
        status:code,
        body,
        error:false
    })
}


function error(req,res,message,status){
    const body = message ? message : "Internal Server Error"
    const code = status ? status : 500

    res.status(code).json({
        status:code,
        body,
        error:true
    })
}


module.exports={
    success,
    error
}