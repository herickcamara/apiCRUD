const express = require('express')
const cors = require('cors')
const routes = require('./routers')
const err = require('./err/err')
const app = express()


app.use(cors())
app.use(express.json())
app.use(routes)


//not found
app.use(err.notFound)
//CATCH ALL
app.use(err.catchAll)
app.listen(7777,()=>console.log('Hello world'))