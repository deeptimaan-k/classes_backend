const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    chapters: [chapterSchema]
});

const classSchema = new mongoose.Schema({
    class: { type: String, required: true },  // Ensure this matches your data
    subjects: [subjectSchema]
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
