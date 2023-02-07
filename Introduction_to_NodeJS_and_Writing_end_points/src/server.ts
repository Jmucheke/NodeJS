import express, { json, Request, Response } from 'express'
const app=express()

//Middlewares
app.use(json()) // add the body to the Request

interface Todo{
 id:number,
 title:string,
 description:string
}

const todos:Todo[]=[] // todos is of type Todo array

// Get all Todos
app.get('/todos', (req:Request, res:Response)=>{
 res.status(200).json(todos)
})

app.get('/todos/:id', (req: Request<{id:number}>, res: Response) => {
 const id = +req.params.id
 const index=todos.findIndex(x=>x.id===id)
 if(index<0){
  return res.status(404).json({message:"Todo not found"})
 }
 return res.status(200).json(todos[index])
})

 

// Adding a new Todo
app.post('/todos', (req:Request, res:Response)=>{
 const{title,description}=req.body as{title:string, description:string} // data passed at the body
 todos.push({title,description, id:Math.floor(Math.random()*1000)})
 return res.status(201).json({message:'Todo Added Successfully'})
})

// Update a Todo
app.get('/todos/:id', (req: Request<{id:string}>, res: Response) => {
 const id = +req.params.id
 const index = todos.findIndex(x => x.id === id)
 if (index<0) {
  return res.status(404).json({ message: "Todo not found" })
 }
  const { title, description } = req.body as { title: string, description: string }
  todos[index] = { ...todos[index], title, description }
  res.status(200).json({message:"Todo Updated Successfully"})
})




app.listen(4000 , ()=>{
 console.log("App is Running.....");
})