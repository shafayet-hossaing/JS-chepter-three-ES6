const restPera = ((...rest) => {
    for(let i = 0; i < rest.length; i++) {
        console.log(`The Name is ${rest[i]}`);
    }
})("America","Jon","Mark")



// Using For of
const restPera = ((...rest) => {
    for(const restPro of rest){ // const doesn't need to be used
        console.log(`The Name is ${restPro}`);
    }
})("America","Jon","Mark")




// Using Map 
const restPera = ((...rest) => {
    rest.map(restItem => console.log(`The Name is ${restItem}`))
})("America","Jon","Mark")