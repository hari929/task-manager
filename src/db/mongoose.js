const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api",{
    useNewUrlParser: true,
    useCreateIndex: true
})



// const data = new User({
//     name: 'Hari ',
//     email: ' ABC@gmail.com'
// })

// data.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.error(error)
// })