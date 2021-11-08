const keys = ['dog', 'cat', 'horse', 'pig', 'chicken'];

let farmerObject = {
 pig: {
 price: 120,
 count: 11,
 },
 horse: {
 price: 250,
 count: 13,
 },
 chicken: {
 price: 20,
 count: 110,
 },
 farmerName: 'tom',
 address: 'Nowhere Number 7',
}

let objKeys = Object.keys(farmerObject); 

console.log(objKeys)

