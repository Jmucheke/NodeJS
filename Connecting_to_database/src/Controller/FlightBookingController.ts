import { RequestHandler } from 'express'
import mssql from 'mssql'
import {v4 as uid} from 'uuid'
import {sqlConfig} from '../config'

export const getBookings:RequestHandler=async (req,res)=>{

 try{
  const pool = await mssql.connect(sqlConfig)
  const bookings = await pool.request().query("getFlightsBookings").recordset
 }catch (error:any);
 )


}
