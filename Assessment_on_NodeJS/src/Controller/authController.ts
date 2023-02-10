import { RequestHandler, Request, Response } from 'express'
import { v4 as uid } from 'uuid'
import { RegistrationSchema } from '../Helpers'
import { DecodedData } from '../Models'
import Bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import path from 'path'
import jwt from 'jsonwebtoken'
import { DatabaseHelper } from '../DatabaseHelpers'

const _db = new DatabaseHelper()
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

interface ExtendedRequest extends Request {
 body: { Name: string, Email: string, Password: string, ConfirmPassword: string }
 info?: DecodedData
}

export async function RegisterUser(req: ExtendedRequest, res: Response) {
 try {
  const id = uid()
  const { Name, Email, Password } = req.body
  const { error } = RegistrationSchema.validate(req.body)
  if (error) {
   return res.status(422).json(error.details[0].message)
  }
  const hashedPassword = await Bcrypt.hash(Password, 10)
  ///check if email exist
  await _db.exec('RegisterUser', { name: Name, email: Email, password: hashedPassword })
  const token = jwt.sign(Name, process.env.SECRETKEY as string, { expiresIn: '3600s' })
  return res.status(201).json({ message: 'User registered' })

 }
 catch (error) {
  res.status(500).json(error)
 }
}


// // Endpoint to reset the password
// export const resetPassword: RequestHandler = async (req, res) => {

//  const email = req.body.email;

//  const sqlQuery = `SELECT * FROM users
//                       WHERE email = '${email}'`;

//  // Execute the query
//  request.query(sqlQuery, (err, result) => {
//   if (err) {
//    console.error(err);
//    return res.status(500).json({
//     message: 'An error occurred while searching for the user'
//    });
//   }

//   // If the user was not found, return an error
//   if (!result.recordset.length) {
//    return res.status(404).json({
//     message: 'User not found'
//    });
//   }

//   const user = result.recordset[0];

//   const newPasswordHash = bcrypt.hashSync(req.body.password, 10);

//   const updateQuery = `UPDATE users
//                             SET password = '${newPasswordHash}'
//                             WHERE id = ${user.id}`;

//   request.query(updateQuery, (err, result) => {
//    if (err) {
//     console.error(err);
//     return res.status(500).json({
//      message: 'An error occurred while resetting the password'
//     });
//    }

//    return res.status(200).json({
//     message: 'Password reset successful'
//    });
//   });
//  });
// }
