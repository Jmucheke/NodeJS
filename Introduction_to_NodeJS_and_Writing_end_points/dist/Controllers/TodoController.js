"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getOneTodo = exports.getTodos = void 0;
const todos = []; // todos is of type Todo array
// Get all Todos
const getTodos = (req, res) => {
    return res.status(200).json(todos);
};
exports.getTodos = getTodos;
// Get one Todo
const getOneTodo = (req, res) => {
    const id = +req.params.id;
    const index = todos.findIndex(x => x.id === id);
    if (index < 0) {
        return res.status(404).json({ message: "Todo not found" });
    }
    return res.status(200).json(todos[index]);
};
exports.getOneTodo = getOneTodo;
// Adding a new Todo
const addTodo = (req, res) => {
    const { title, description } = req.body; // data passed at the body
    todos.push({ title, description, id: Math.floor(Math.random() * 1000) });
    return res.status(201).json({ message: 'Todo Added Successfully' });
};
exports.addTodo = addTodo;
// Update a Todo
const updateTodo = (req, res) => {
    const id = +req.params.id;
    const index = todos.findIndex(x => x.id === id);
    if (index < 0) {
        return res.status(404).json({ message: "Todo not found" });
    }
    const { title, description } = req.body;
    todos[index] = Object.assign(Object.assign({}, todos[index]), { title, description });
    res.status(200).json({ message: "Todo Updated Successfully" });
};
exports.updateTodo = updateTodo;
// Delete a TOdo
const deleteTodo = (req, res) => {
    const id = +req.params.id;
    const index = todos.findIndex(x => x.id === id);
    if (index < 0) {
        return res.status(404).json({ message: "Todo not found" });
    }
    todos.splice(index, 1);
    res.status(200).json({ message: "Todo is Deleted" });
};
exports.deleteTodo = deleteTodo;
