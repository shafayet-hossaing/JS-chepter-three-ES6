// Map Definitions :
// 1: Will take each and every element
// 2: And will through a loop 
// 3: And return an array


const numbers = [12, 13, 15, 56, 58]

// Just Map()
let doubleIt = numbers.map(number => number * 2)
console.log(doubleIt);


// Map With Arrow Function And IIFE As Well
const doubleIt = ((numbers) => {
    const double = numbers.map(number => number * 2)
    console.log(double);
})(numbers)


// Map With Arrow Function And IIFE As Well But In The Same Line
const doubleIt = (numbers => console.log(numbers.map(number => number * 2)))(numbers);



// Object 
const products = [
    {name: "Smart Watch", price: 1000},
    {name: "Samsung", price: 2000}
]
const productNames = (product => console.log(product.map(product => product.name)))(products);