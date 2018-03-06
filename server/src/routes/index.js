import { Router } from 'express';
import blogRouter from './blogs';
import usersRouter from './users';
import authRouter from './auth';
import stripeDonationsRouter from './stripeDonations';
import contactRouter from './contactform';
import signupRouter from './signup';
import locationRouter from './location'; //new
import instrumentRouter from './instrument'; //new
import artistRouter from './artist'; //new
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/artist', artistRouter); //new
router.use('/location', locationRouter); //new
router.use('/instrument', instrumentRouter); //new
router.use('/auth', authRouter);
router.use('/donate', stripeDonationsRouter);
router.use('/contact', contactRouter);
router.use('/signup', signupRouter);

router.post('*', tokenMiddleware, isLoggedIn);
router.put('*', tokenMiddleware, isLoggedIn);
router.delete('*', tokenMiddleware, isLoggedIn);

router.use('/blogs', blogRouter);
router.use('/users', usersRouter);

export default router;