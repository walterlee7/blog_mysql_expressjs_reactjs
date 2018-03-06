const express = require('express');
import Table from '../table';

const router = express.Router();

let instruments = new Table('instruments');

router.get('/', (req, res) => {
    instruments.getAll()
        .then((instruments) => {
            console.log('BE: Instrument');
            res.json(instruments);
        }).catch(err => {
            // console.log('BE: Instrument');
            console.log(err);
        });
});

module.exports = router;