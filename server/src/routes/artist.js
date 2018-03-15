const express = require('express');
import Table from '../table';

const router = express.Router();

let users = new Table('users');

router.get('/', (req, res) => {
    users.getAll()
        .then((users) => {
            console.log('BE: Get Users');
            res.json(users);
        }).catch(err => {
            console.log('BE: Get Users Error');
            console.log(err);
        });
});

router.get('/both/:location/:instrument', (req, res) => {
    const location = req.params.location;
    const instrument = req.params.instrument;
    console.log(req.params);
    console.log('BE:' + location);
    console.log('BE:' + instrument);
    users.getLocationAndInstrument(location, instrument)
        .then((artists) => {
            console.log('BE: Location and Instrument');
            res.json(artists);
        }).catch(err => {
            // console.log('BE: Instrument');
            console.log(err);
        });
});

router.get('/:location?', (req, res) => {
    const location = req.params.location;
    users.getLocation(location)
        .then((artist) => {
            console.log('BE: User Location');
            res.json(artist);
        }).catch(err => {
            console.log('BE: User Location Error');
            console.log(err);
        });
});

router.get('/instrument/:instrument?', (req, res) => {
    const instrument = req.params.instrument;
    console.log(instrument);
    users.getInstrument(instrument)
        .then((artist) => {
            console.log('BE: Artist Instrument');
            res.json(artist);
        }).catch(err => {
            // console.log('BE: Instrument');
            console.log(err);
        });
});

module.exports = router;