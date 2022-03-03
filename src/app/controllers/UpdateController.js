const Book = require('../models/Book')
module.exports = new class UpdateController{
    index(req, res, next) {
        res.render('update');
    }

    async update(req, res, next) {
        console.log(req.body);
        await Book.findOneAndUpdate({name:req.body.name},req.body)
            .then(() => res.redirect("/books"));
    }
}