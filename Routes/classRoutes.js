const express = require('express');
const router = express.Router();
const classController = require('../Controllers/classController');
const upload = require('../config/aws-config'); 

router.post('/classes/:className/subjects/:subjectName/chapters/:chapterId/video', upload.single('video'), classController.addVideo);

router.get('/classes/:className/subjects/:subjectName/chapters/:chapterId/video', classController.getVideoUrl);

router.get('/classes', classController.getAllClasses);
router.get('/classes/:className/subjects', classController.getSubjectsByClass);
router.get('/classes/:className/subjects/:subjectName/chapters', classController.getChaptersBySubject);

router.post('/classes', classController.addClass);
router.post('/classes/:className/subjects', classController.addSubject);
router.post('/classes/:className/subjects/:subjectName/chapters', classController.addChapter);

router.put('/classes/:className', classController.updateClass);
router.put('/classes/:className/subjects/:subjectId', classController.updateSubject);
router.put('/classes/:className/subjects/:subjectName/chapters/:chapterId', classController.updateChapter);

router.delete('/classes/:className', classController.deleteClass);
router.delete('/classes/:className/subjects/:subjectName', classController.deleteSubject);
router.delete('/classes/:className/subjects/:subjectName/chapters/:chapterId', classController.deleteChapter);

module.exports = router;
