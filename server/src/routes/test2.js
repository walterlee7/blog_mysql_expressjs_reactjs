const express = require('express');
import Table from '../table';

const router = express.Router();

let test2 = new Table('test2');

router.put('/:id', (req, res, next) => {

    let instruments = req.body;
    let id = req.params.id;

    instruments.userid = id;

    test2.updateInstrument(instruments)
        .then(() => {
            res.json({});
        }).catch((err) => {
            console.log('update Instrument fail')
            console.log(err);
        })
});

module.exports = router;