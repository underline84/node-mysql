const router = require('express').Router()

//import controller
const UserController = require('./controllers/UserController')

router.post('/login', UserController.login)

module.exports = router