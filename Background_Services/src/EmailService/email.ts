import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import ejs from 'ejs'
import path from 'path'
dotenv.config([ path: path.resolve(__dirname, '../../.env')])

function createTransport(cofig:any){
 return nodemailer.createTransport
 let config = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  service: 'gmail',
  port: 587,
  auth: {
   user: process.env.EMAIL,
   pass: process.env.PASSWORD
  }
 })

}