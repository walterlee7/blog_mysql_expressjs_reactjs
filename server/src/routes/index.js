import { Router } from 'express';
import blogRouter from './blogs';

let router = Router();

router.use('/blogs', blogRouter);

export default router;