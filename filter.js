// Filter Definitions
// 1: It will check each element for checking the condition
// 2: And will return the elements if the condition get matched 

const numbers = [12,56,23,20,14,45,19,1,7,56,]

// Normal filter
const filters = numbers.filter(number => number > 20)
console.log(filters);


// filter with function
const findBig = (number => console.log(number.filter(numb => numb > 20)))(numbers)



// Filter in object
const products = [
    {name: "Smart Watch", price: 1000},
    {name: "Samsung", price: 2000},
    {name: "Apple", price: 7000},
]

const productPriceChecking = (product => console.log(product.filter(pro => pro.price < 5000)))(products);