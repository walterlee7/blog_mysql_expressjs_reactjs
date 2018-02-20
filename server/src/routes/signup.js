const express = require('express');
import Table from '../table';
import { generateHash } from '../utils/security';

const router = express.Router();

let users = new Table('users');

router.post('/', (req, res, next) => {

    let user = req.body;

    generateHash(user.password)
        .then((hash) => {
            delete user.isLong;
            delete user.password;
            user.hash = hash;
            return users.insert(user);
        })
        .then(id => {
            res.json(id);
        }).catch((err) => {
            if (err.code === 'ER_DUP_ENTRY') {
                res.status(400).send({
                    message: 'There is already a user with that email'
                });

                return;
            }
            console.log(err);
            res.sendStatus(500);
        })

});

module.exports = router;