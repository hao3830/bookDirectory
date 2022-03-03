const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const db = require('C:\\Users\\Admin\\Desktop\\New folder (2)\\learnJS\\bookDirectory\\src\\config\\db');
const routes = require('./routes');
const port = 3000;
const cors = require('cors');
const helmet = require('helmet');
const methodOverride = require('method-override')



// app.use(cors());
// app.use(helmet());
app.use(methodOverride('_method'))
app.use(express.urlencoded());
app.use(express.json());
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