process.on('unhandleRejection', (err,p) =>{
    console.log(`Custom unhandleRejection ${err}`)
})

process.on('uncaughtException', (err) =>{
    console.log(`Custom uncaughtException, ${err}`)
})

Promise (resolve => JSON.parse({ color: 'blue'}))