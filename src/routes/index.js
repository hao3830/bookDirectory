const booksRouter = require('./books');
const updateRouter = require('./update')
function routes(app) {
    app.use('/update',updateRouter);
    app.use('/books',booksRouter);
}

module.exports = routes;