module.exports = {

    muliplMongooseToObject: function (courses) {
        return courses.map(course => course.toObject());
    },
    mongoosetoObject: function (courses) {
        return courses ? courses.toObject() : courses;
    }
}