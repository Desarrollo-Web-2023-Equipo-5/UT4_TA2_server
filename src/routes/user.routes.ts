import { Router } from 'express';
import { createUser, getUserById } from '../controllers/user.controller';

const router = Router();

router.post('/users', createUser);
router.get('/users/:id', getUserById);

export default router;