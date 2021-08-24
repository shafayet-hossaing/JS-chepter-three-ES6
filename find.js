// Find Definition
// 1: Will find an element based on condition
// And will return the element not an array (Return the exact element)


// Object 
const products = [
    {name: "Smart Watch", price: 1000},
    {name: "Samsung", price: 2000, color: "Black"}
]
const productNames = (product => console.log(product.find(product => product.color == "Black")))(products);