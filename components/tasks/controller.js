let Tasks = require("../dummy").tasks
const er = require('../utils/error')
const response = require("../../network/response")
const {nanoid} = require("nanoid")


module.exports={
    
    list:function list(req,res,next){
        response.success(req,res,Tasks,200)
    },
    get:function get(req,res,next){

        const id = req.params.id
        let status = 200
    
        const task = Tasks.filter(element=> element.id = id )    
        status = task.length==0 && 404    
        response.success(req,res,task,status)
    
    },
    create: function create(req,res,next){
        const body = req.body
        if(body.name){
            const newTask = {
                name:body.name,
                id:nanoid()
            }
            Tasks.push(newTask)
            response.success(req,res,newTask,201)
        }else{
            response.error(req,res,"Bad request",400)
        }     
    },
    remove: function remove(req,res,next){
        const id = req.params.id
        Tasks = Tasks.filter(el=> el.id != id)
        response.success(req,res,'a',200)
    }

}