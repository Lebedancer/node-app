const express = require('express');
const mongodb = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017/libraryApp';
const booksRouter = express.Router();

booksRouter.route('/')
    .get((req, res) => {

        mongodb.connect(url, (err, db) => {
            var collection = db.collection('books');
            collection.find().toArray((err, results)=>{
                res.render('books', {layout: false, title: 'Books', books: results});
            });
        });
    });

booksRouter.route('/:id')
    .get((req, res) => {
        var id = new objectId(req.params.id);
        console.log(id);
        mongodb.connect(url, (err, db) => {
            var collection = db.collection('books');
            var result = collection.findOne({_id: id}, (err, result) => {
                console.log(result);
                res.render('books', { layout: false, title: result.title });
            });
        });


    });

module.exports = booksRouter;