var Students = require('./students.dao');

exports.createStudent = function (req, res, next) {
    var student = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        id: req.body.id
    };

    Students.create(student, function(err, student) {
        if(err) {
            res.json({
                error : err
            })
        }
        else{
            res.json({
                message : "Student created successfully"
            })
        }

    })
}

exports.getStudents = function(req, res, next) {
    Students.get({}, function(err, students) {
        if(err) {
            res.json({
                error: err
            })
        }
        else{
            res.json({
                students: students
            })
        }

    })
}

exports.getStudent = function(req, res, next) {
    Students.get({firstName: req.params.firstName}, function(err, students) {
        if(err) {
            res.json({
                error: err
            })
        }
        else {
            res.json({
                students: students
            })
        }

    })
}

exports.updateStudent = function(req, res, next) {
    var student = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
    Students.update({id: req.params.id}, student, function(err, student) {
        if(err) {
            res.json({
                error : err
            })
        }
        else {
            res.json({
                message : "Student updated successfully"
            })
        }

    })
}

exports.removeStudent = function(req, res, next) {
    Students.delete({id: req.params.id}, function(err, student) {
        if(err) {
            res.json({
                error : err
            })
        }
        else {
            res.json({
                message : "Student deleted successfully"
            })
        }

    })
}
