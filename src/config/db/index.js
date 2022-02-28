const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/bookDirectory', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to database');
    }
    catch (err) {
        console.log(err)
    }
} 

module.exports = {connect};