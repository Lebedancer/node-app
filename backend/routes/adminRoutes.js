const express = require('express');
const mongodb = require('mongodb').MongoClient;

const adminRoutes = express.Router();
const books = require('../stores/books');

adminRoutes.route('/addbooks')
    .get((req, res) => {
        const url = 'mongodb://localhost:27017/libraryApp';
        mongodb.connect(url, (err, db) => {
            var collection = db.collection('books');
            collection.insertMany(books, (err, results) => {
                res.send(results)
                db.close();
            });

        })
    });



module.exports = adminRoutes;