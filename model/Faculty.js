const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: Number,
    FacultyName: String,
    FacultyDesignation: String,
    FacultyEducationQualification: String,
    FacultyDepartment: String,
});

module.exports = mongoose.model('Faculty', schema);
