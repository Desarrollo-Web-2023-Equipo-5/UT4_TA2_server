import { Router } from 'express';
import { createUser, getUserById, addTask, getTasks } from '../controllers/user.controller';

const router = Router();

router.post('/users', createUser);
router.get('/users/:id', getUserById);

router.post('/users/:id/tasks', addTask);
router.get('/users/:id/tasks', getTasks);

export default router;