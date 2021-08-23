// ES6 Destructuring
const Jon = ["Jon", "21", "America"]
const [names, age, country] = Jon
console.log(country);


// Normal Object Destructuring
const mark = {
    name : "Mark",
    age : 23,
    profession : "Student"
}

const {name, age, profession} = mark
console.log(name,age,profession);


// Normal Object Destructuring And Setting The New Names Of Keys
const mark = {
    name : "Mark",
    age : 23,
    profession : "Student"
}

const {name:studentNames, age:studentAge, profession:studentProfession} = mark
console.log(studentNames);




// Nested Object Destructuring
const mark = {
    nameFinding: {
        newNameFinding: {
            name : "Mark",
            age : 23,
            profession : "Student"
        }
    }
}

const {nameFinding: {newNameFinding: {name:names ,age:ages}}} = mark
console.log(names,ages);





// Nested Object Destructuring & controlling the something of undefined by (?) chaining
const mark = {
    nameFinding: {
        newNameFinding: {
            name : "Mark",
            age : 23,
            profession : "Student"
        }
    }
}
console.log(mark.nameFinding?.newNameFindings?.professions); // Controlling the (something of undefined by (?) chaining)