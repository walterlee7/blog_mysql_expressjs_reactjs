const express = require('express');
import Table from '../table';

const router = express.Router();

let genres = new Table('genres');

router.get('/', (req, res) => {
    genres.getGenre()
        .then((genres) => {
            console.log('BE Success: Genres');
            console.log(genres);
            res.json(genres);
        }).catch(err => {
            console.log('BE Fail: Genres');
            console.log(err);
        });
});

module.exports = router;