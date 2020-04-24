const {MongoClient,ObjectID} = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        console.log('while connecting to mongodb error occurred..')
    }
    console.log('connected to mongodb..')
    const db = client.db(databaseName)
    // db.collection('users').insertMany([{name: 'Hari',age: 30},
    // {name: 'Nani',age: 25}], (error, result) => {
    //     if(error) {
    //         return console.log("not able to insert data..")
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').find({name: 'Hari'}).toArray((error, result) => {
    //     if(error) {
    //         console.log('not able to get the data..')
    //     }
    //     console.log(result)
    // })

    // db.collection('users').updateMany({
    //     name: 'Hari'
    //     }, {
    //         $set:{
    //             age: 100
    //         }
    //     }).then((result) => {
    //         console.log(result)
    //     }).catch((error) => {
    //         console.log(error)
    //     })

     db.collection('users').deleteMany({
         name: 'Hari'
     }).then((result) => {
         console.log(result)
     }).catch((error) => {
         console.log(error)
     })
})