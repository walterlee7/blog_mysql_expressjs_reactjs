const express = require('express');
import Table from '../table';

const router = express.Router();

let messages = new Table('messages');

router.get('/', (req, res) => {
    let message = req.body;

    messages.getAll()
        .then((messages) => {
            res.json(messages);
        }).catch((err) => {
            console.log(err);
        });
});

router.get('/inbox', (req, res) => {
    console.log('retrieving inbox');
    let inbox = req.body;

    messages.getRecent()
        .then((message) => {
            res.json(message);
        }).catch((err) => {
            console.log(err);
        });

})

router.post('/', (req, res) => {

    console.log('saving the message');
    let message = req.body;

    messages.insert(message)
        .then(id => {
            res.json(id);
        })
});

module.exports = router;