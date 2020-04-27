const add =  (a, b) => {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(a + b)
    }, 2000)
})
}
const doSum1 = async () => {
    const sum1 = await add(1, 2)
    console.log('sum1', sum1)
    const sum2 = await add(sum1, 3)
    return sum2
}
doSum1().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
