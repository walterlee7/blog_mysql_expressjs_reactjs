const express = require('express');
import Table from '../table';

const router = express.Router();

let users = new Table('Users');

import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

// var params = { Bucket: 'gigfinder', Key: 'images/myimage.jpg', ContentType: 'image/jpeg' };

AWS.config.update({
    secretAccessKey: process.env.SW_SK,
    accessKeyId: process.env.SW_ACCESS_ID,
    region: 'us-east-2'
});

let s3 = new AWS.S3();

let upload = multer({
    storage: multerS3({
        s3,
        bucket: 'gigfinder',
        ContentType: 'image/jpeg',
        // metadata: function (req, file, cb) {
        //     cb(null, { fieldName: file.fieldname });
        // },
        key: function (req, file, cb) {
            cb(null, Date.now() + '.jpg')
        }
    })
});

// router.post('/imageInsert/:userid', upload.single('image'), (req, res, next) => {
//     let id = req.params.userid;
//     let uri = req.params.uri;
//     console.log(uri);

//     users.insertPhoto(id, { image: uri })
//         .then(() => {
//             console.log('Insert Image Success');
//             res.sendStatus(201);
//         }).catch((err) => {
//             console.log('Insert Image Fail');
//             console.log(err);
//             res.sendStatus(500);
//         });

// });

// router.get('/:id', (req, res) => {
//     let id = req.params.id;

//     users.getPhoto(id)
//         .then((image) => {
//             console.log('Get Image Success');
//             res.json(image);
//         }).catch((err) => {
//             console.log('Get Image Fail');
//             console.log(err);
//             res.sendStatus(500);
//         });
// });

router.put('/updatePhoto/:id', upload.single('image'), (req, res, next) => {
    console.log('router.put: ' + req.file);
    console.dir(req.file);
    let photo = { uri: req.file.location };
    let id = req.params.id;

    console.log('id: ' + id);

    // genres.userid = id;

    users.updatePhoto(id, photo)
        .then((image) => {
            res.json({ image });
        }).catch((err) => {
            console.log('update Photo fail')
            console.log(err);
        })
});

// router.put('/updatePhoto/:id', (req, res, next) => {
//     console.log('router.put: ' + req.body);
//     console.dir(req.body);
//     let photo = req.body;
//     let id = req.params.id;

//     console.log('id: ' + id);

//     users.updatePhoto(id, photo)
//         .then((image) => {
//             res.json({ image });
//         }).catch((err) => {
//             console.log('update Photo fail')
//             console.log(err);
//         })
// });

export default router;