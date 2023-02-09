import mssql from 'mssql'
import dotenv from 'dotenv'
dotenv.config()
const sql = request('mysql')
const sqlCofig = {
 user:process.env.DB_USER as string,
 password:process.env.DB_PWD as string,
 database:process.env.DB_NAME as string,
 server:'localhost',


 pool:{
  max:10,
  min:0,
  idleTimeoutMillis:30000
 },
 options:{
  encrypt:false, // for azure
  trustServerCertificate:false // change to true for local dev / self-signed certs
 }
}

const checkConnection = async()=>{
 try{
  const x=await mssql.connect(sqlConfig)|
  if(x.connected){
   console.log("Connecting");
   
  }
 }
 catch{

 }
}

checkConnection()