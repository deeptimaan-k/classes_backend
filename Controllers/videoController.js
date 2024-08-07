const Video = require('../Models/videoModel');

exports.uploadVideo = async (req, res) => {
    try {
        const { className, subjectName } = req.body;
        const videoUrl = req.file.location; // S3 URL of the uploaded video

        const newVideo = new Video({
            class: className,
            subject: subjectName,
            videoUrl: videoUrl
        });

        await newVideo.save();
        res.status(201).json({ message: 'Video uploaded successfully', video: newVideo });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getVideosByClassAndSubject = async (req, res) => {
    try {
        const { className, subjectName } = req.params;
        const videos = await Video.find({ class: className, subject: subjectName });

        if (videos.length === 0) return res.status(404).json({ message: 'No videos found' });

        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
