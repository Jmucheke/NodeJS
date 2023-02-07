"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const app = (0, express_1.default)();
//Middlewares
app.use((0, express_1.json)()); // add the body to the Request
const todos = []; // todos is of type Todo array
// Get all Todos
app.get('/todos', (req, res) => {
    res.status(200).json(todos);
});
app.get('/todos/:id', (req, res) => {
    const id = +req.params.id;
    const index = todos.findIndex(x => x.id === id);
    if (index < 0) {
        return res.status(404).json({ message: "Todo not found" });
    }
    return res.status(200).json(todos[index]);
});
// Adding a new Todo
app.post('/todos', (req, res) => {
    const { title, description } = req.body; // data passed at the body
    todos.push({ title, description, id: Math.floor(Math.random() * 1000) });
    return res.status(201).json({ message: 'Todo Added Successfully' });
});
// Update a Todo
app.get('/todos/:id', (req, res) => {
    const id = +req.params.id;
    const index = todos.findIndex(x => x.id === id);
    if (index < 0) {
        return res.status(404).json({ message: "Todo not found" });
    }
    const { title, description } = req.body;
    todos[index] = Object.assign(Object.assign({}, todos[index]), { title, description });
    res.status(200).json({ message: "Todo Updated Successfully" });
});
app.listen(4000, () => {
    console.log("App is Running.....");
});
