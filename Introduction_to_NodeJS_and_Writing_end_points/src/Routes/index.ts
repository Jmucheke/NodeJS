import {Router} from 'express'
import { addTodo, deleteTodo, getOneTodo, getTodos, updateTodo } from '../Controllers/TodoController'

const router = Router()

router.get('', getTodos)
router.post('', addTodo)
router.get('/:id', getOneTodo)
router.put('/:id', updateTodo)
router.delete('', deleteTodo)

export default router