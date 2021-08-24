// Find Definition
// 1: Will find an element based on condition
// 2: And will return the element not an array (Return the exact element)
// 3: Jodi onk gulo match kore then just first element ta dibe not like filter (filte shob gulo diye dey jodi match kore)


// Object 
const products = [
    {name: "Smart Watch", price: 1000},
    {name: "Samsung", price: 2000, color: "Black"}
]
const productNames = (product => console.log(product.find(product => product.color == "Black")))(products);