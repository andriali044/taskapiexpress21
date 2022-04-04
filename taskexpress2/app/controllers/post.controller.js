const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;

//create
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return ;
    }

    //create post
    const post = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    // Save Post in the database
    Post.create(post)
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Post."
            });
        });
};
//retrieve all
exports.findAll = (req, res) => {
};

//find a single
exports.findOne = (req, res) => {
};

//update a post with id
exports.update = (req, res) => {
};

//delete a post
exports.delete = (req, res) => {
};

//delete all posts
exports.deleteAll = (req, res) => {
};

//find all published
exports.findAllPublished = (req, res) => {
}