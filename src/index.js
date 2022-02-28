const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const db = require('C:\\Users\\Admin\\Desktop\\New folder (2)\\learnJS\\bookDirectory\\src\\config\\db');
const routes = require('./routes');
const port = 3000;

// Connect to db server
db.connect();

app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine','hbs');
app.set('views', 'C:\\Users\\Admin\\Desktop\\New folder (2)\\learnJS\\bookDirectory\\src\\resources\\views')

//routing

routes(app);

app.listen(port,() => {
    console.log(`Linstening ${port}`)
});