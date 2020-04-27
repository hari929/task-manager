const express = require('express')
require('./db/mongoose.js')
const userRouts = require('./routers/user.js')


const app = new express()
app.use(express.json())
app.use(userRouts)
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('server listening at '+ port)
})