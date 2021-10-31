let Users = require("../dummy").users
const er = require('../utils/error')
const response = require("../../network/response")
const {nanoid} = require("nanoid")


module.exports={
    
    list:function list(req,res,next){
        response.success(req,res,Users,200)
    },
    get:function get(req,res,next){

        const id = req.params.id
        let status = 200
    
        const task = Users.filter(element=> element.id = id )    
        status = task.length==0 && 404    
        response.success(req,res,task,status)
    
    },
    create: function create(req,res,next){
        const body = req.body
        if(body.name && body.email){
            const newTask = {
                name:body.name,
                email:body.email,
                id:nanoid()
            }
            Users.push(newTask)
            response.success(req,res,newTask,201)
        }else{
            response.error(req,res,"Bad request",400)
        }     
    },
    remove: function remove(req,res,next){
        const id = req.params.id
        Users = Users.filter(el=> el.id != id)
        response.success(req,res,'a',200)
    }

}