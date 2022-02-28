const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const Book = new Schema({
    name : { type: 'string', default: 'TBD'},
    img : { type: 'string', default: 'TBD'},
    title : { type: 'string'},
    createdAt : { type: 'string', default: Date.now()},
    updatedAt : { type: 'string', default: Date.now()},
    slug : { type: 'string', slug: 'name', unique: true}
})

module.exports = mongoose.model('Book',Book);