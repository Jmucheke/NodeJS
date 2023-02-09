import express from 'express'
const app = express()

// Register some Middlewares
app.use(json()) // adds a body to the request

app.listen(4000,()=>{
 console.log('Server Running ...');
 
})