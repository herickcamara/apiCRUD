const express = require('express')
const routes = express.Router()
const UserController = require('./controllers/UserControllers')
const {
    createNewProject,

    getMyProjects,
    dele
} = require('./controllers/ProjectsControllers')



routes
//route user
.get('/user', UserController.users)
.post('/user', UserController.create)
.put('/user/:id', UserController.update)
.delete('/user/:id', UserController.delete)
//route projects
.get('/projects',getMyProjects)
.post('/projects',createNewProject)
.put('/projects/:id',createNewProject)
.delete('/projects/:id',dele)

module.exports = routes