import { Router } from 'express';
import blogRouter from './blogs';
import authRouter from './auth';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();
router.use('/auth', authRouter);

router.use(tokenMiddleware);
router.use(isLoggedIn);

router.use('/blogs', blogRouter);

export default router;