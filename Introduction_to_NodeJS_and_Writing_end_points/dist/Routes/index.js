"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TodoController_1 = require("../Controllers/TodoController");
const router = (0, express_1.Router)();
router.get('', TodoController_1.getTodos);
router.post('', TodoController_1.addTodo);
router.get('/:id', TodoController_1.getOneTodo);
router.put('/:id', TodoController_1.updateTodo);
router.delete('', TodoController_1.deleteTodo);
exports.default = router;
