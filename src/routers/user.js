const express = require('express')
const User = require('../models/users.js')
const router = new express.Router()

router.post("/users", (req, res) => {
    const user = new User(req.body)
    user.save().then((resp) => {
        res.send(resp)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

router.get("/users", (req, res) => {
    User.find().then((resp) => {
        res.send(resp)
    }).catch((error) => {
        res.send(error)
    })
})

router.get("/users/:name", (req, res) => {
    const name = req.params.name
    User.find({
        "name": name
    }).then((resp) => {
        if (resp.length == 0) {
            console.log(resp.length == 0)
            return res.status(404).send()
        }
        res.send(resp)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

router.put("/user", (req, resp) => {
    const user = req.body
    console.log('The request ', user)
    updateUsers(user).then((count) => {
        console.log('COUNT IS', count)
        resp.status(200).send("Updated successfully....")
    }).catch((error) => {
        resp.status(500).send("user not update....")
        console.log(error)
    })
})

router.delete("/user/:id", async (req, resp) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return resp.status(404).send("User not found!..")
        }
        resp.send(user)

    } catch (error) {
        resp.status(500).send("Error occurred while deleting the user!.. ")
    }
})

updateUsers = async (user) => {
    await User.updateMany(user, {
        name: 'C'
    })
    const count = await User.countDocuments({
        name: "C"
    })
    return count
}

module.exports = router