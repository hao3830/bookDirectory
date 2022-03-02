const Book = require('../models/Book')
module.exports = new class UpdateController{
    index(req, res, next) {
        res.render('push');
    }
    show(req, res, next) {
        const book = new Book(req.body);
        book.save()
            .then(() => res.redirect('/books'))
            .catch(err => console.log(err));
    }
}