const express = require('express');
import Table from '../table';

const router = express.Router();

let artists = new Table('artists');

router.get('/', (req, res) => {
    artists.getAll()
        .then((artists) => {
            console.log('BE: Artists');
            res.json(artists);
        }).catch(err => {
            // console.log('BE: Instrument');
            console.log(err);
        });
});

router.get('/both/:location?_:instrument?', (req, res) => {
    const location = req.params.location;
    const instrument = req.params.instrument;
    console.log(req.params);
    console.log('BE:' + location);
    console.log('BE:' + instrument);
    artists.getLocationAndInstrument(location, instrument)
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
    artists.getLocation(location)
        .then((artist) => {
            console.log('BE: Artist Location');
            res.json(artist);
        }).catch(err => {
            // console.log('BE: Instrument');
            console.log(err);
        });
});

router.get('/instrument/:instrument?', (req, res) => {
    const instrument = req.params.instrument;
    console.log(instrument);
    artists.getInstrument(instrument)
        .then((artist) => {
            console.log('BE: Artist Instrument');
            res.json(artist);
        }).catch(err => {
            // console.log('BE: Instrument');
            console.log(err);
        });
});

module.exports = router;