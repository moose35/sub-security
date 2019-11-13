const people = require('./modules/people.js'); // these should be at the top

console.log('Hello, Node.');

// log "[name] is learning node today!"

people.students.forEach(function (student) {
    console.log(student + ' is learning node today!');
});

people.instructors.forEach(function (instructor) {
    console.log(instructor + ' is teaching node today!');
});

