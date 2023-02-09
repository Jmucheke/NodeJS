import {Request, Response, RequestHandler} from "express"

interface Todo {
 id: number,
 title: string,
 description: string
}

const todos: Todo[] = [] // todos is of type Todo array


// Get all Todos
export const getTodos:RequestHandler=(req, res)=>{
 return res.status(200).json(todos)
}


// Get one Todo
export const getOneTodo:RequestHandler<{id:string}>=(req, res) => {
 const id = +req.params.id
 const index = todos.findIndex(x => x.id === id)
 if (index<0) {
  return res.status(404).json({ message: "Todo not found" })
 }
 return res.status(200).json(todos[index])
}

// Adding a new Todo
export const addTodo = (req: Request, res: Response) => {
 const { title, description } = req.body as { title: string, description: string } // data passed at the body
 todos.push({ title, description, id: Math.floor(Math.random() * 1000) })
 return res.status(201).json({ message: 'Todo Added Successfully' })
}

// Update a Todo
export const updateTodo:RequestHandler<{ id: string }> = (req, res) => {
 const id = +req.params.id
 const index = todos.findIndex(x => x.id === id)
 if (index < 0) {
  return res.status(404).json({ message: "Todo not found" })
 }
 const { title, description } = req.body as { title: string, description: string }
 todos[index] = { ...todos[index], title, description }
 res.status(200).json({ message: "Todo Updated Successfully" })
}


// Delete a TOdo
export const deleteTodo: RequestHandler<{ id: string }> = (req, res) => {
 const id = +req.params.id
 const index = todos.findIndex(x => x.id === id)
 if (index < 0) {
  return res.status(404).json({ message: "Todo not found" })
 }
 todos.splice(index, 1)
 res.status(200).json({ message: "Todo is Deleted" })

}