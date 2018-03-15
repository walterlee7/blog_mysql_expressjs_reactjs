const express = require('express');
import Table from '../table';

const router = express.Router();

let genres = new Table('genres');
let test = new Table('test');

router.get('/', (req, res) => {
    genres.getGenre()
        .then((genres) => {
            console.log('BE Success: Genres');
            // console.log(genres);
            res.json(genres);
        }).catch(err => {
            console.log('BE Fail: Genres');
            console.log(err);
        });
});

router.get('/:id?', (req, res) => {
    const id = req.params.id;
    test.getUserGenres(id)
        .then((genres) => {
            console.log('BE Success: User Genres');
            // console.log(genres);
            delete genres.id;
            delete genres.userid;
            res.json(genres);
        }).catch(err => {
            console.log('BE Fail: User Genres');
            console.log(err);
        });
});

module.exports = router;