const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    class: { type: String, required: true },
    subject: { type: String, required: true },
    videoUrl: { type: String, required: true }
});

module.exports = mongoose.model('Video', VideoSchema);
