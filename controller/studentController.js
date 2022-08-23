const Userdb = require('../models/studentModel')


//create and save new user
exports.create = (req, res) => {
    console.log("creating the new user.....")
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }
    // new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        address: req.body.address,
    });

    // save user in the database
    user
        .save(user)
        .then((data) => {
            //res.send(data)
            res.send("student added successfully")
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while creating a create operation",
            });
        });
};

exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        Userdb.findById(id)
            .then((data) => {
                if (!data) {
                    res.status(404).send({ message: "Not found user with id " + id });
                } else {
                    res.send(data);
                }
            })
            .catch((err) => {
                res.status(500).send({ message: "Erro retrieving user with id " + id });
            });
    } else {
        Userdb.find()
            .then((user) => {
                res.send(user);
            })
            .catch((err) => {
                res
                    .status(500)
                    .send({
                        message:
                            err.message || "Error Occurred while retriving user information",
                    });
            });
    }
};

// Update a new idetified user by user id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: "Data to update can not be empty" });
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res
                    .status(404)
                    .send({
                        message: `Cannot Update user with ${id}. Maybe user not found!`,
                    });
            } else {
                res.send(data);
            }
        })
        .catch((err) => {
            res.status(500).send({ message: "Error Update user information" });
        });
};

// Delete a user with specified user id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                res
                    .status(404)
                    .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
            } else {
                res.send({
                    message: "User was deleted successfully!",
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete User with id=" + id,
            });
        });
}

/*const addStudent =(req, res) => {
    var existstudents= User.getStudentDetails()
    console.log(existstudents)
    const newId = Math.floor(Math.random()*100)
    console.log(req.body)
    existstudents[newId]=req.body
    User.saveStudentDetails(existstudents)
    var name = existstudents[newId]['name']
    res.render('welcome',{name:name})
}

const getAllStudentDetails = (req, res) => {
    const students = User.getStudentDetails()
    console.log(students)
    res.send(students)
}

const getStudent =(req,res)=>{
    console.log(req.query.id)
    students = User.getStudentDetails()
    var name =students[req.query.id]['name']
    res.render('welcome',{name:name})
}

const updatestudent=(req, res) => {
    res.send("student updated successfully!")
}

const deleteStudent=(req, res) => {
    res.send("student deleted successfully!")
}*/

exports.studentRegisteration = (req, res) => {
    res.sendFile('register.html', { root: './views' })
}
/*
module.exports = {
    addStudent,
    getAllStudentDetails,
    updatestudent,
    deleteStudent,
    getStudent,
    studentRegisteration
}*/