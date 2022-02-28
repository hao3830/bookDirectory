const Book = require('../models/Book');;
const mongoose = require('../utils/mongoose');
module.exports = new class BookController {
        index(req, res, next) {
            Book.find({})
                .then(book=>{
                    res.render('books')
                } );
        }
}