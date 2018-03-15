const express = require('express');
import Table from '../table';

import multerS3 from 'multer-s3';
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var AWS = require('aws-sdk');
var s3 = new AWS.S3({ accessKeyId: process.env.SW_ACCESS_ID, secretAccessKey: process.env.SW_SK, region: 'us-east-2' });
var params = { Bucket: 'gigfinder', Key: 'images/myimage.jpg', ContentType: 'image/jpeg' };

const router = express.Router();

let users = new Table('users');

router.post('/:id', upload.single('image'), (req, res, next) => {

    let photo = req.body.uri;
    let id = req.params.id;
    let uri = req.file.location;


    // AWS.config.update({
    //     secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    //     accessKeyId: env.AWS_ACCESS_KEY_ID,
    //     region: 'us-east-2'
    // });

    // let s3 = new AWS.S3();

    let upload = multer({
        storage: multerS3({
            s3,
            bucket: env.S3_BUCKET_NAME,
            metadata: function (req, file, cb) {
                cb(null, { fildName: file.fieldname });
            },
            key: function (req, file, cb) {
                cb(null, Date.now() + '.jpg')
            }
        })
    });

    // s3.getSignedUrl('putObject', params, function (err, url) {
    //     console.log('Your generated pre-signed URL is', url);
    // });

    users.update(id, { image: uri })
        .then(() => {
            res.json({});
        }).catch((err) => {
            console.log('update Photo fail')
            console.log(err);
        })
});

module.exports = router;