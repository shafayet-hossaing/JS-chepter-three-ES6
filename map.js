const numbers = [12, 13, 15, 56, 58]

// Just Map()
// let doubleIt = numbers.map(number => number * 2)
// console.log(doubleIt);


// Map With Arrow Function And IIFE As Well
// const doubleIt = ((numbers) => {
//     const double = numbers.map(number => number * 2)
//     console.log(double);
// })(numbers)


// Map With Arrow Function And IIFE As Well But In The Same Line
const doubleIt = (numbers => console.log(numbers.map(number => number * 2)))(numbers);