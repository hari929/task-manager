const promiseClient = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject('Error..!')
    }, 2000)
})
promiseClient.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
