const booksRouter = require('./books');

function routes(app) {
    app.use('/books',booksRouter);
}

module.exports = routes;