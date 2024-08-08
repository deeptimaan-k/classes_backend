const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    videoUrl: { type: String } // Field to store the URL of the uploaded video
});

const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    chapters: [chapterSchema]
});

const classSchema = new mongoose.Schema({
    class: { type: String, required: true },
    subjects: [subjectSchema]
});

const Class = mongoose.model('Classes', classSchema);

module.exports = Class;
