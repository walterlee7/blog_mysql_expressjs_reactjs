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
import genreRouter from './genre'; //new
import testRouter from './test'; //new
import test2Router from './test2'; //new
import userRouter from './user'; //new
import photoRouter from './photo'; //new
import messageRouter from './message'; //new
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/message', messageRouter);
router.use('/photo', photoRouter);
router.use('/user', userRouter);
router.use('/artist', artistRouter); //new
router.use('/location', locationRouter); //new
router.use('/instrument', instrumentRouter); //new
router.use('/test', testRouter); //new
router.use('/test2', test2Router); //new
router.use('/genre', genreRouter); //new
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