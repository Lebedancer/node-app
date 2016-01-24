const express = require('express');

const booksRouter = express.Router();
const books = require('../stores/books');

booksRouter.route('/')
    .get((req, res) => {
        res.render('books', { layout: false, title: 'Books', books });
    });

booksRouter.route('/:id')
    .get((req, res) => {
        var id = req.params.id;
        var book = books.find(item => {
            return item.id === parseInt(id, 10);
        });
        res.render('books', { layout: false, title: book.title });
    });

module.exports = booksRouter;