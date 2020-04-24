const express = require('express')
require('./db/mongoose.js')
const User = require('./models/users.js')

const app = new express()
app.use(express.json())
const port = process.env.PORT || 3000

app.post("/users", (req,res) => {
    const user = new User(req.body)
    user.save().then((resp) => {
        res.send(resp)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get("/users", (req,res) => {
    User.find().then((resp) => {
        res.send(resp)
    }).catch((error) => {
        res.send(error)
    })
})

app.get("/users/:name", (req, res) => {
    const name = req.params.name
    User.find({"name": name }).then((resp) => {
        if(resp.length == 0 ) {
            console.log(resp.length == 0)
            return res.status(404).send()
        }
        res.send(resp)
    }).catch((error) => {
        res.status(500).send(error)
    })
})
app.listen(port, () => {
    console.log('server listening at '+ port)
})