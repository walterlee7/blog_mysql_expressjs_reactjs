import { Router } from 'express';
import Table from '../table';
let router = Router();

let users = new Table('users');

router.get('/', (req, res) => {

    users.getAll()
        .then(users => {
            res.json(users);
        });
});

export default router;