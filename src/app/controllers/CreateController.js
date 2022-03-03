const Book = require('../models/Book')
module.exports = new class CreateController{
    index(req, res, next) {
        res.render('update');
    }
    show(req, res, next) {
        const book = new Book(req.body);
        book.save()
            .then(() => res.redirect('/books'))
            .catch(err => console.log(err));
    }
}