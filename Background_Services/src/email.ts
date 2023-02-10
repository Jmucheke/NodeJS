



let dummyarray:{name:string, email:string, message:string}[]=[
 {
  name:'Jesse Mucheke',
  email:'muchekejesse@gmail.com',
  message:'You are an amazing buddy. BIG UP!!'
 },
 {
  name: 'Jesse Mucheke',
  email: 'maina.mucheke@students.dkut.ac.ke',
  message: 'Maliza shule buana'
 },
 {
  name: 'Jesse Mucheke',
  email: 'mainajesse169@gmail.com',
  message: 'You are an amazing buddy. BIG UP!!'
 },
 {
  name: 'Jesse Mucheke',
  email: 'jessemucheke1@gmail.com',
  message: 'You are an amazing buddy. BIG UP!!'
 },
 {
  name: 'Jesse Mucheke',
  email: 'mainajesse100@gmail.com',
  message: 'You are an amazing buddy. BIG UP!!'
 }
]

for(let user of dummyarray){
 ejs.renderFile('Templates/registration.ejs', { name:user.name,message:user.message }, (error, html) => {
  // console.log(html);
  // if(error){
  //  console.log(error)
  // }
  // Adding the message
  const message = {
   from: process.env.EMAIL, // sender address
   to: user.email, // list of receivers
   subject: 'Subject of your email', // Subject line
   html: // plain text body
  }

  // send mail with defined transport object
  transporter.sendMail(message, function (err, info) {
   if (err)
    console.log(err)
   else
    console.log(info);
  });


 })

}





