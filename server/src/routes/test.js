const express = require('express');
import Table from '../table';

const router = express.Router();

let test = new Table('test');

router.put('/:id', (req, res, next) => {

    let genres = req.body;
    let id = req.params.id;

    genres.userid = id;

    test.updateGenre(genres)
        .then(() => {
            res.json({});
        }).catch((err) => {
            console.log('update Genre fail')
            console.log(err);
        })
});

module.exports = router;