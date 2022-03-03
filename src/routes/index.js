const booksRouter = require('./books');
const updateRouter = require('./create')
function routes(app) {
    app.use('/create',updateRouter);
    app.use('/books',booksRouter);
    app.use('/update',updateRouter);
}

module.exports = routes;