const express = require('express');
import Table from '../table';

const router = express.Router();

let users = new Table('users');

router.get('/:id', (req, res) => {
    console.log('req.params: ' + req.params);
    console.dir(req.params);
    const id = req.params.id;
    console.log('BE id: ' + id);

    if (!id) {
        users.getAll()
            .then((users) => {
                delete users.password;
                delete users.hash;
                res.json(users);
            }).catch(err => {
                console.log(err);
            });
    } else {
        users.getOne(id)
            .then((user) => {
                console.log('BE user: ' + user);
                delete user.password;
                delete user.hash;
                res.json(user);
            }).catch(err => {
                console.log('getOne error');
                console.log(err);
            });
    };

});

module.exports = router;