const express = require('express');
import Table from '../table';

const router = express.Router();

let messages = new Table('messages');

router.get('/chat/:userid/:receiverid', (req, res) => {
    console.log('retreiving conversation');
    // let inbox = req.body;
    console.log(req.params.userid);
    console.log(req.params.receiverid);
    messages.getUserConversation(req.params.userid, req.params.receiverid)
        .then((message) => {
            console.log(message);
            res.json(message);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
})

router.get('/inbox/:userid', (req, res) => {
    console.log(req.params.userid);
    console.log('retrieving inbox');
    // let inbox = req.body;

    messages.getUserInbox(req.params.userid)
        .then((inbox) => {
            res.json(inbox);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
})

router.post('/', (req, res) => {

    console.log('saving the message');
    let message = req.body;

    messages.insert(message)
        .then(id => {
            res.json(id);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

module.exports = router;