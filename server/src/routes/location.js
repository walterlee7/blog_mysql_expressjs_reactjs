const express = require('express');
import Table from '../table';

const router = express.Router();

let locations = new Table('locations');

router.get('/', (req, res) => {
    locations.getAll()
        .then((locations) => {
            console.log('BE: Locations');
            res.json(locations);
        }).catch(err => {
            // console.log('BE: Locations');
            console.log(err);
        });
});

module.exports = router;