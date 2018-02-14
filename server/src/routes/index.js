import { Router } from 'express';
import blogRouter from './blogs';
import usersRouter from './users';
import authRouter from './auth';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();
router.use('/auth', authRouter);

router.post('*', tokenMiddleware, isLoggedIn);
router.put('*', tokenMiddleware, isLoggedIn);
router.delete('*', tokenMiddleware, isLoggedIn);

router.use('/blogs', blogRouter);
router.use('/users', usersRouter);

export default router;