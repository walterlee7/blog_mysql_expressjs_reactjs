const express = require('express');
import Table from '../table';

const router = express.Router();

let test = new Table('test');

router.post('/', (req, res, next) => {

    console.log(req.body);

    let genre = req.body;

    test.insertGenre(genre)
        .then((id) => {
            console.log('BE Success: Test');
            console.log(id);
            res.json(id);
        }).catch(err => {
            console.log('BE Fail: Test');
            console.log(err);
        })
});

module.exports = router;