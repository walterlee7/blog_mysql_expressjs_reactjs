const express = require('express');
import Table from '../table';

const router = express.Router();

let instruments = new Table('instruments');
let test2 = new Table('test2');

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

router.get('/i/', (req, res) => {
    instruments.getInstruments()
        .then((instruments) => {
            console.log('BE: Instrument');
            res.json(instruments);
        }).catch(err => {
            // console.log('BE: Instrument');
            console.log(err);
        });
});

router.get('/i/i/:id?', (req, res) => {
    const id = req.params.id;
    test2.getUserInstruments(id)
        .then((instruments) => {
            console.log('BE: User Instruments');
            // console.log(instruments);
            delete instruments.id;
            delete instruments.userid;
            res.json(instruments);
        }).catch(err => {
            console.log('BE: User Instruments');
            console.log(err);
        });
});

module.exports = router;