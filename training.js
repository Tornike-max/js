let players = [ 'lebron james', 'steph curry', 'derrick rose',]

players.push('klay thompson', 'zaza pachulia', 'goga bitadze')
console.log(players)

let footBallPlayers = ['messi', 'ronaldo', 'neymar', 'xavi', 'iniesta']
footBallPlayers.reverse();
console.log(footBallPlayers)

const fruits = ['apple', 'banana', 'orange', 'mango']

fruits.shift('apple')
console.log(fruits)

fruits.unshift('apple');
console.log(fruits)

const games = ['fortnite', 'pubg', 'call of duty', 'need for speed', 'forza horizon', 'gta', 'counter strike']
const myBest = games.slice(0,3);
console.log(myBest)

const participants = ['karlo', 'apci', 'qista', 'datua', 'giga', 'bangali',]
const winners = participants.slice(0,3)
console.log(winners)

const cars = ['bmw', 'mercedes-benz', 'audi', 'toyota', 'porche', 'opel', 'pagani', 'ferarri']
const winnerCars = cars.slice(-4,)
console.log(winnerCars,)

let ages = [18,20,25,36,46];
ages.some(checkAdult)
function checkAdult(age) {
    return age > 20;
}
console.log(ages.some(checkAdult))


let user = {
   name: '',
   age: '',
}

const newUser = {
    ...user
}

const arr = [{...user,name:'tornike', age:20,}, {...user,name:'giorgi',age:32,}, {...user,name:'levani',age:34,}]


console.log(user, arr)


let array =['first', 'second', 'third', 'forth', 'fifth', 20, 40, 70,]

let returnArr = array.filter((item) =>{
    if(typeof item === 'string') return true;
})

console.log(returnArr)


let socialApps =['facebook','twitter', 'instagram', 'whatsapp', 'telegram',20,25,45,]

let returnNumbers = socialApps.filter ((item)=>{
    if(typeof item ==='number') return true
})

console.log(returnNumbers)

let footballStadiums = ['enfield', 'old traford', 'camp nou', 'santiago bernabeu', 'mestalia', 'san siro',]

let returnBigStadiums = footballStadiums.filter((item)=>{
    if(typeof item ==='string') return true
})
console.log(returnBigStadiums)

let newStadiums = footballStadiums.map((item)=> item + ' capacity')
console.log(newStadiums)

let barcaPlayers = ['depay', 'coutinho', 'fati', 'gavi', 'de jong', 'nico',]

let starPlayers = barcaPlayers.map((item)=> item + ' star')
console.log(starPlayers)

let farmersCount = ['დიდი შირაქი', 'პატარა შირაქი', 'ტარიბანა', 'შავჭრელები', 'თელაწყალი',30,45] 
let returnBigValey = farmersCount.filter ((item)=>{
    if(typeof item === 'string') return true
})
console.log(returnBigValey)

let shirakiValey = farmersCount.map ((item)=> item + ' valey')
console.log(shirakiValey)

let RussiaIntelligence = ['CBP', 'KGB', 'VIMPEL', 'NAK', 'FSK', 'FAPSI', 'FSO','GRU']
let returnIntelligence = RussiaIntelligence.filter ((item)=>{
    if(typeof item === 'string') return true
})
console.log(returnIntelligence)

let motherRussia = RussiaIntelligence.map ((item)=> item + ' Intelligence')
console.log(motherRussia)

let x  = myFunction (4,3)

function myFunction (a,b) {
    return a * b;
}
console.log(x)

let math = mathFunction (4,2,32,31)

function mathFunction (a,b,c,d) {
    return a * b * c * d;
}
console.log(math)

let animals = {
    cat:20,
    dog:10,
    cow: 30,
}

// for (let item in animals) {
//     console.log (item)
// }

Object.keys(animals).forEach((key)=>{
    console.log(animals[key])
})

let testNumber = 20;

let result;

if(testNumber < 20){
    result = 'true';
}
else if(testNumber === 20){
    result = 'equal';
}
else(testNumber > 20);{
    result = 'false';
}

console.log(result)

let newBigObject = {
    text: 'raime',
    insideObj: {
        insidetText:'raime2',
        insideInsideObject:{
            text2:'didi karlo',
        }
    }
}

let testing;

testing = newBigObject?.insideObj?.insideInsideObject?.text2;

console.log(testing)

let person = {
    firstName:'tornike',
    lastName:'ozbetelashvili'
}

let fullName =(firstName,lastName,)=>{
    return firstName + ' ' + lastName;
}
console.log(fullName(person.firstName, person.lastName))

let person1 = {
    firstName1: 'levani',
    lastName1: 'ozbetelashvili',
    fullName1: function(){
        console.log(this.firstName1 + ' ' + this.lastName1)
    }
}
person1.fullName1()


class car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const myCar = new car ('ford', 2014);
myCar.name + ' ' + myCar.year;

console.log(myCar)

let georgianKings = ['ერეკლე მეორე', 'დავით აღმაშენებელი', 'ლაშა გიორგი', 'თამარ მეფე', 'ფარნავაზი',]

let returnKings = georgianKings.filter((item)=>{
    if(typeof item === 'string')return true
})
console.log(returnKings)

class People {
    constructor() {
        this.name = 'jack';
        this.lastName = 'sparrow';
    }
    
}
console.log(new People)



class Painters{
    constructor(){
        this.paint = 'van ghog';
        this.art = 'starry night';
    }
}
console.log(new Painters)

class Virus {
    constructor(){
        this.corona = 'covid19';
        this.pigflue = 'pigflue';
    }
}
console.log(new Virus)

class Sea {
    constructor(){
        this.black = 'black sea';
        this.meditarian = 'meditarian sea';
    }
}
console.log(new Sea)

class sea {
    constructor(name,height){
        this.name = "black sea";
        this.height = '2500m';
    }
}
console.log(new sea)

class virus {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}
let myvirus = new virus('corona','2020',)
console.log(myvirus.name + ' ' + myvirus.year)

class partners {
    constructor(name,lastname,){
        this.name = name;
        this.lastname = lastname;
    }
}
let myPartners = new partners ('mike','fulmer',)
console.log(myPartners.name + ' ' + myPartners.lastname)

class bestie {
    constructor (name,lastname){
        this.name = name;
        this.lastname = lastname;
    }
}
let mybestie = new bestie ('kethryn','winick',)
console.log(mybestie.name + ' ' + mybestie.lastname)


class Anvaristics {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    years () {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myAnvaristics = new Anvaristics ('opel', 1994,)
console.log('My Car Is' + ' ' + myAnvaristics.years() + ' ' + 'Years Old')

class dad {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    dadage () {
        let date = new Date();
        return date.getFullYear() -this.year;
    }
}
 
let mydad = new dad ('TEMURI',1960,)
console.log('My Dad Is' + ' ' + mydad.dadage() + ' ' + 'Years Old')










