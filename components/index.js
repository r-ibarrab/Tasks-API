const express = require('express')
const router = express.Router()

const Tasks = require('./tasks/index')
const Users = require('./users/index')

const errorMiddleware = require("../network/errorMiddleware")


router.use("/tasks",Tasks)
router.use("/users",Users)
router.use(errorMiddleware)




module.exports = router

