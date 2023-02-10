import { Router } from "express";
import { RegisterUser } from "../Controller/authController";
import { VerifyToken } from "../Middlewares/VerifyToken";



const authrouter = Router()

authrouter.post('/register', RegisterUser)
// authrouter.get('/home', VerifyToken, Homepage)//protected Route

export default authrouter

