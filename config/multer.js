const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = require('./aws');

// Set up multer to upload files to S3
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.S3_BUCKET_NAME,
        acl: 'public-read', // adjust the permissions as needed
        key: function (req, file, cb) {
            cb(null, `videos/${Date.now().toString()}-${file.originalname}`);
        }
    })
});

module.exports = upload;
