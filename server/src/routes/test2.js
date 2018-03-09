const express = require('express');
import Table from '../table';

const router = express.Router();

let test = new Table('test2');

router.post('/', (req, res, next) => {

    console.log(req.body);

    let instrument = req.body;

    test.insertInstrument(instrument)
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