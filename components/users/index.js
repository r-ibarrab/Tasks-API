const express = require('express')
const router = express.Router()
const Controller = require("./controller.js")



router.get("/",Controller.list)
router.get("/:id",Controller.get)
router.post("/",Controller.create)
router.delete("/:id",Controller.remove)








module.exports = router

