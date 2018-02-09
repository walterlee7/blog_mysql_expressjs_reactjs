const express = require('express');
import Table from '../table';

const router = express.Router();

let blogs = new Table('blogs');

router.get('/:id?', (req, res) => {
    const id = req.params.id;

    if (!id) {
        blogs.getAll()
            .then((blogs) => {
                res.json(blogs);
            }).catch(err => {
                console.log(err);
            });
    } else {
        blogs.getOne(id)
            .then((blog) => {
                res.json(blog);
            });
    };

});

router.get('/:id?', (req, res) => {
    const id = req.params.id;
    if (!id) {
        db.GetChirps()
            .then((chirp) => {

                res.send(chirp);
            }).catch((err) => {
                console.log(err);
            });
    } else {
        res.send(db.GetChirp(id));
    }
});

router.post('/', (req, res) => {

    let blog = req.body;

    blogs.insert(blog)
        .then(id => {
            res.json(id);
        })
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    blogs.update(id, req.body)
        .then(() => {
            res.sendStatus(200);
        })
});

router.delete('/:id', (req, res) => {
    blogs.delete(req.params.id)
        .then(() => {
            res.sendStatus(200);
        })
});

module.exports = router;