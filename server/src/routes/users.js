import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
// import { read } from 'fs';

let router = Router();

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    delete req.user.hash;
    res.json(req.user);
});

export default router;