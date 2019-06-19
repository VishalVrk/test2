var Students = require('./students.controller');

module.exports = function(router) {
    router.post('/create', Students.createStudent);
    router.get('/get', Students.getStudents);
    router.get('/get/:firstName', Students.getStudent);
    router.put('/update/:id', Students.updateStudent);
    router.delete('/remove/:id', Students.removeStudent);
}