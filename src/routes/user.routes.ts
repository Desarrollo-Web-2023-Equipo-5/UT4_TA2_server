import { Router } from 'express';
import { createUser, getTasks, getUserById } from '../controllers/user.controller';

const router = Router();

router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.get('/users/:id/tasks', getTasks);
export default router;