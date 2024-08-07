const express = require('express');
const router = express.Router();
const videoController = require('../Controllers/videoController');
const upload = require('../config/multer');

// Route to upload video
router.post('/upload', upload.single('video'), videoController.uploadVideo);

// Route to fetch videos by class and subject
router.get('/videos/:className/:subjectName', videoController.getVideosByClassAndSubject);

module.exports = router;
