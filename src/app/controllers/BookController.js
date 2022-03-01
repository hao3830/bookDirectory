const Book = require('../models/Book');;
const {muliplMongooseToObject} = require('../utils/mongoose');
module.exports = new class BookController {
        index(req, res, next) {
            Book.find({})
                .then(books=>{
                   res.render('books', {Book: muliplMongooseToObject(books)})
                })
                .catch(next);
            
        }
}