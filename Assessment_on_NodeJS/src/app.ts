import express, {json} from 'express'
import authrouter from './Router/authRoute'
const app = express()

// Middlewares
app.use(json())


app.use('/auth', authrouter)

app.listen(4000,()=>{
 console.log("App is Running......."); 
})