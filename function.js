let farmerObject = {
    name: 'iakobi',
    animalsForSale: ['sheep', 'chicken', 'cow'],
    animalInStock: {
        sheep: {
            count: 12,
            price: 100
        },
        chicken: {
            count: 50,
            price: 100
        },
        pig: {
            count: 2,
            price: 5
        }
    }
};

let farmerObjectParcers = (farmer) => {
    let sum = 0;
    farmer.animalsForSale.forEach ((animal)=>{
        if(farmer.animalInStock[animal] && farmer.animalInStock[animal].price && farmer.animalInStock[animal].count) {
        let total = farmer.animalInStock[animal].count * farmer.animalInStock[animal].price;
        sum += total;
    }

    })
    console.log(farmer.name +    ' send '   + sum)
}
farmerObjectParcers (farmerObject)

let farmerObject1 = {
    name: 'tornike',
    animalsForSale: ['dog', 'cat', 'duck', 'elephant', 'lion', 'pig', 'cow'],
    animalInStock: {
        sheep: {
            count: 12,
            price: 100
        },
        chicken: {
            count: 50,
            price: 100
        },
        pig: {
            count: 80,
            price: 50
        },
        dog: {
            count: 3,
            price: 10
        },
        cat: {
            count:10,
            price: 15
        },
        cow: {
            count: 30,
            price: 40
        },
        elephant: {
            price: 20000,
        },

    }
};

farmerObjectParcers (farmerObject1)

const arr = [farmerObject, farmerObject1]
arr.forEach ( farmerObjectParcers)
