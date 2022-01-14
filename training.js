// let players = [ 'lebron james', 'steph curry', 'derrick rose',]

// players.push('klay thompson', 'zaza pachulia', 'goga bitadze')
// console.log(players)

// let footBallPlayers = ['messi', 'ronaldo', 'neymar', 'xavi', 'iniesta']
// footBallPlayers.reverse();
// console.log(footBallPlayers)

// const fruits = ['apple', 'banana', 'orange', 'mango']

// fruits.shift('apple')
// console.log(fruits)

// fruits.unshift('apple');
// console.log(fruits)

// const games = ['fortnite', 'pubg', 'call of duty', 'need for speed', 'forza horizon', 'gta', 'counter strike']
// const myBest = games.slice(0,3);
// console.log(myBest)

// const participants = ['karlo', 'apci', 'qista', 'datua', 'giga', 'bangali',]
// const winners = participants.slice(0,3)
// console.log(winners)

// const cars = ['bmw', 'mercedes-benz', 'audi', 'toyota', 'porche', 'opel', 'pagani', 'ferarri']
// const winnerCars = cars.slice(-4,)
// console.log(winnerCars,)

// let ages = [18,20,25,36,46];
// ages.some(checkAdult)
// function checkAdult(age) {
//     return age > 20;
// }
// console.log(ages.some(checkAdult))


// let user = {
//    name: '',
//    age: '',
// }

// const newUser = {
//     ...user
// }

// const arr = [{...user,name:'tornike', age:20,}, {...user,name:'giorgi',age:32,}, {...user,name:'levani',age:34,}]


// console.log(user, arr)


// let array =['first', 'second', 'third', 'forth', 'fifth', 20, 40, 70,]

// let returnArr = array.filter((item) =>{
//     if(typeof item === 'string') return true;
// })

// console.log(returnArr)


// let socialApps =['facebook','twitter', 'instagram', 'whatsapp', 'telegram',20,25,45,]

// let returnNumbers = socialApps.filter ((item)=>{
//     if(typeof item ==='number') return true
// })

// console.log(returnNumbers)

// let footballStadiums = ['enfield', 'old traford', 'camp nou', 'santiago bernabeu', 'mestalia', 'san siro',]

// let returnBigStadiums = footballStadiums.filter((item)=>{
//     if(typeof item ==='string') return true
// })
// console.log(returnBigStadiums)

// let newStadiums = footballStadiums.map((item)=> item + ' capacity')
// console.log(newStadiums)

// let barcaPlayers = ['depay', 'coutinho', 'fati', 'gavi', 'de jong', 'nico',]

// let starPlayers = barcaPlayers.map((item)=> item + ' star')
// console.log(starPlayers)

// let farmersCount = ['დიდი შირაქი', 'პატარა შირაქი', 'ტარიბანა', 'შავჭრელები', 'თელაწყალი',30,45] 
// let returnBigValey = farmersCount.filter ((item)=>{
//     if(typeof item === 'string') return true
// })
// console.log(returnBigValey)

// let shirakiValey = farmersCount.map ((item)=> item + ' valey')
// console.log(shirakiValey)

// let RussiaIntelligence = ['CBP', 'KGB', 'VIMPEL', 'NAK', 'FSK', 'FAPSI', 'FSO','GRU']
// let returnIntelligence = RussiaIntelligence.filter ((item)=>{
//     if(typeof item === 'string') return true
// })
// console.log(returnIntelligence)

// let motherRussia = RussiaIntelligence.map ((item)=> item + ' Intelligence')
// console.log(motherRussia)

// let x  = myFunction (4,3)

// function myFunction (a,b) {
//     return a * b;
// }
// console.log(x)

// let math = mathFunction (4,2,32,31)

// function mathFunction (a,b,c,d) {
//     return a * b * c * d;
// }
// console.log(math)

// let animals = {
//     cat:20,
//     dog:10,
//     cow: 30,
// }

// // for (let item in animals) {
// //     console.log (item)
// // }

// Object.keys(animals).forEach((key)=>{
//     console.log(animals[key])
// })

// let testNumber = 20;

// let result;

// if(testNumber < 20){
//     result = 'true';
// }
// else if(testNumber === 20){
//     result = 'equal';
// }
// else(testNumber > 20);{
//     result = 'false';
// }

// console.log(result)

// let newBigObject = {
//     text: 'raime',
//     insideObj: {
//         insidetText:'raime2',
//         insideInsideObject:{
//             text2:'didi karlo',
//         }
//     }
// }

// let testing;

// testing = newBigObject?.insideObj?.insideInsideObject?.text2;

// console.log(testing)

// let person = {
//     firstName:'tornike',
//     lastName:'ozbetelashvili'
// }

// let fullName =(firstName,lastName,)=>{
//     return firstName + ' ' + lastName;
// }
// console.log(fullName(person.firstName, person.lastName))

// let person1 = {
//     firstName1: 'levani',
//     lastName1: 'ozbetelashvili',
//     fullName1: function(){
//         console.log(this.firstName1 + ' ' + this.lastName1)
//     }
// }
// person1.fullName1()


// class car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }

// const myCar = new car ('ford', 2014);
// myCar.name + ' ' + myCar.year;

// console.log(myCar)

// let georgianKings = ['ერეკლე მეორე', 'დავით აღმაშენებელი', 'ლაშა გიორგი', 'თამარ მეფე', 'ფარნავაზი',]

// let returnKings = georgianKings.filter((item)=>{
//     if(typeof item === 'string')return true
// })
// console.log(returnKings)

// class People {
//     constructor() {
//         this.name = 'jack';
//         this.lastName = 'sparrow';
//     }
    
// }
// console.log(new People)



// class Painters{
//     constructor(){
//         this.paint = 'van ghog';
//         this.art = 'starry night';
//     }
// }
// console.log(new Painters)

// class Virus {
//     constructor(){
//         this.corona = 'covid19';
//         this.pigflue = 'pigflue';
//     }
// }
// console.log(new Virus)

// class Sea {
//     constructor(){
//         this.black = 'black sea';
//         this.meditarian = 'meditarian sea';
//     }
// }
// console.log(new Sea)

// class sea {
//     constructor(name,height){
//         this.name = "black sea";
//         this.height = '2500m';
//     }
// }
// console.log(new sea)

// class virus {
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
// }
// let myvirus = new virus('corona','2020',)
// console.log(myvirus.name + ' ' + myvirus.year)

// class partners {
//     constructor(name,lastname,){
//         this.name = name;
//         this.lastname = lastname;
//     }
// }
// let myPartners = new partners ('mike','fulmer',)
// console.log(myPartners.name + ' ' + myPartners.lastname)

// class bestie {
//     constructor (name,lastname){
//         this.name = name;
//         this.lastname = lastname;
//     }
// }
// let mybestie = new bestie ('kethryn','winick',)
// console.log(mybestie.name + ' ' + mybestie.lastname)


// class Anvaristics {
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
//     years () {
//         let date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// let myAnvaristics = new Anvaristics ('opel', 1994,)
// console.log('My Car Is' + ' ' + myAnvaristics.years() + ' ' + 'Years Old')

// class dad {
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
//     dadage () {
//         let date = new Date();
//         return date.getFullYear() -this.year;
//     }
// }
 
// let mydad = new dad ('TEMURI',1960,)
// console.log('My Dad Is' + ' ' + mydad.dadage() + ' ' + 'Years Old')

// class Mom{
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
//     MomAge(){
//         let date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }
// let MyMom = new Mom('Maia', 1961,)
// console.log('My Mom Is' + ' ' + MyMom.MomAge() + ' ' + 'Years Old')

// class Brother{
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
//     BrotherAge(){
//         let date = new Date ();
//         return date.getFullYear() -this.year
//     }
// }
// let MyBrother = new Brother ('giorgi',1989,)
// console.log('My Brother Is' + ' ' + MyBrother.BrotherAge() + ' ' + 'Years Old')

// class Middlebrother{
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
//     MiddleAge(){
//         let date = new Date();
//         return date.getFullYear() -this.year
//     }
// }
// let MyMidBro = new Middlebrother ('levani', 1987,)
// console.log('My Middle Brother Is' + ' ' + MyMidBro.MiddleAge() + ' ' + 'Years Old')

// let firstName, lastName, price, discount, fullPrice;

// firstName = "John";
// lastName = "Doe";

// price = 19.90;
// discount = 0.10;

// console.log(fullPrice = price - discount)

// class Car{
//     constructor(brand){
//         this.carName = brand
//     }
//     present(){
//         return 'I Have a' + this.carName
//     }
// }

// class Model extends Car{
//     constructor(brand,mod){
//         super(brand);
//         this.Model = mod
//     }
//     show() {
//         return this.present() + 'It is a' + this.model;
//     }
// }

// let myCcar = new Model('Ford','Mustang');
// console.log(myCcar)

// class Plane{
//     constructor(brand){
//         this.planeName = brand
//     }
//     past(){
//         return 'I have a' + this.planeName
//     }
// }

// class Type extends Plane{
//     constructor(brand,mod){
//         super(brand);
//         this.Type =mod
//     }
//     showMe(){
//         return this.past() + 'It is a' + this.Type
//     }
// }   

// let myPlane = new Type('Boeng', '777')
// console.log(myPlane)


// class Mobile {
//     constructor(brand){
//         this.mobileName = brand
//     }
//     future(){
//         return 'I Have a' + this.mobileName
//     }
// }
// class wrong extends Mobile{
//     constructor(brand,mod){
//         super(brand);
//         this.wrong = mod
//     }
//     showWrong(){
//         return this.future() + 'It is a' + this.wrong
//     }
// }
// let myMobile = new wrong('Samsung', 'A70')
// console.log(myMobile)

// // const D =new Date()
// // console.log(new Date)

// // const d = new Date()
// // d.getFullYear()
// // console.log(d)

// // const D = new Date()
// // D.getMonth()
// // console.log(D)

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// const d = new Date
// let month = months[d.getMonth()];
// console.log(month)

// const mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// const b = new Date
// let mont = mon[b.getMonth()];
// console.log(mont)

// const a =new Date
// a.getDate()
// console.log(a)


// const v = new Date
// v.getDate()
// console.log(v)

// Math.random()
//  switch(new Date().getDay()) {
//      case 0:
//          day = 'sunday';
//          break;
//      case 1:
//          day = 'monday';
//          break;
//      case 2:
//          day = 'Tuesday';
//          break;
//      case 3:
//          day = 'Wendesday';
//          break;
//      case 4:
//          day = 'Thursday';
//          break;
//      case 5:
//          day = 'Friday';
//          break;
//      case 6:
//          day = 'Saturday';
//          break;        
//  }
//  console.log(day)




//  let random = Math.floor(Math.random() * 10) + 1;
//  console.log(random)

//  let randomAge = Math.floor(Math.random()* 20)+1;
//  console.log(randomAge)

//  let string1 = 'Hello';
//  let string2 = 'World';
//  let resultat = string1.concat(string2)
//  console.log(resultat)

//  let firstGame = 'GTA San Andreas';
//  let resultation = firstGame.endsWith('Andreas')
//  let resultation2 = firstGame.startsWith('GTA')
// console.log(resultation2)
//  console.log(resultation)


//  promise syntax
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }

//  let myPromise = new Promise (function(myResolve, myReject){
//     let x = 0;

//      if(x===0){
//         myResolve('ok'); //when successful
//      }else{
//         myReject('error'); //when failed
//      }
     
//  });

//  myPromise.then(
//     function(value) { myDisplayer(value); },
//     function(error) { myDisplayer(error); }
    
//   );


// let text = 'hello world,welcome to the universe';
// let Result = text.indexOf('the');
// console.log(Result)

// let Text = 'this world, shall known pain';
// let rsl = Text.indexOf('shall');
// console.log(rsl)

// let saw = 'itamio shiranomononi,honto no heaa akaran,itamio ukitore,itamioshire';
// let pain = saw.indexOf('ukitore');
// console.log(pain)

// const MyFunction = ('a', 'b', 'return a * b');
// MyFunction(4,3);
// console.log('return a * b')

// let doubleText = 'HELLO WORLD';
// let doubleLetter = doubleText.charAt(1)
// console.log(doubleLetter)

// let text = 'sea';
// let text1 = 'food';
// let result = text.concat(text1);
// console.log(result)


// let text1 = 'hello';
// let text2 =  'world';
// let result = text1.concat(' ' + text2);
// console.log(result)


// let text1 = 'hello';
// let text2 = 'mother';
// let text3 = 'fucking';
// let text4 = 'world';
// let result = text1.concat(' ' + text2 + ' ' + text3 + ' ' + text4);
// console.log(result)

// let text = 'jack sparrow always wants black pearl';
// let result = text.endsWith('pearl');
// console.log(result)

// let text = 'jack sparrow always wants black pearl';
// let result =  text.endsWith("pearl");
// console.log(result)

// let text = 'Hello world, welcome to the universe';
// let result = text.includes('welcome');
// console.log(result)

// let text = 'if a string contains a specified string';
// let result = text.indexOf('contains');
// console.log(result)

// let text = 'if a string contains a specified string';
// let result = text.indexOf('String')
// console.log(result)

// let text = "Hello planet earth, you are a great planet.";
// let result = text.lastIndexOf('planet')
// console.log(result)

// let text = "Hello planet earth, you are a great planet."
// let result = text.length;
// console.log(result)

//  let text1 = 'ab'
//  let text2 = 'cd'
//  let result = text1.localeCompare(text2)
//  console.log(result)

// let text1 = "The rain in SPAIN stays mainly in the plain";
// let result = text.match(/ain/g)
// console.log(result)

// let text = 'This world shall known pain';
// let result = text.indexOf('known');
// console.log(result)

// let text = 'This world shall known pain';
// let result = text.includes('shall');
// console.log(result)

// let text = 'this world shall known pain';
// let result = text.endsWith('pain');
// console.log(result)

// let text = 'this world shall known pain';
// let result = text.repeat(2);
// console.log(result)

// let text = 'this world shall known pain';
// let result = text.startsWith('this');
// console.log(result)

// let text = 'this world shall known pain';
// let result = text.length;
// console.log(result)

// let text = "this world shall known pain";
// let text2 = "jiraya boy";
// let result = text + ' ' + text2;
// console.log(result)

// let text = "this world shall known pain";
// let result = text.includes('shall')
// console.log(result)

// class employee {
//     constructor(name, jobtitle, born) {
//         this.name = name;
//         this.jobtitle = jobtitle;
//         this.born = born;
//     }
// }
// employee.prototype.salary = 5000;
// let fred = new employee(Tornike,Reactdev,Tbilisi)
// console.log(fred)

// let text = 'visit microsoft';
// let result = text.replace('microsoft', 'ozbeta')
// console.log(result)

// let text = "Mr Blue has a blue house and a blue car";
// let result = text.replace(/blue/g,'red')
// console.log(result)

// let text = 'green day';
// let result = text.slice(0,7)
// console.log(result)

// let text1 = 'hello world';
// let result1 = text1.slice(6,11)
// console.log(result1)


// split abrunebs arrays
// let text = "Mr Blue has a blue house and a blue car"
// let result = text.split(' ')
// console.log(result)

// let text = 'blue aye';
// let result = text.substring(1,4)
// console.log(result)

// did asoebs apataravebs
// let text = 'Blue Sea';
// let result = text.toLocaleLowerCase()
// console.log(result)

// patara asoebs adidebs
// let text = 'blue sea'
// let result = text.toLocaleUpperCase()
// console.log(result)


// trim() removes whitespace from both sides of a string:
// let text = '     blue aye     ';
// let result = text.trim()
// console.log(result)


// valueOf() returns the primitive value of a string:
// let text = "Hello World!";
// let result = text.valueOf();
// console.log(result)

// function randomNumber(min,max){
//     return Math.floor(Math.random() * (mix,max))+ min
// }

// let farmerObject = {
//     name: 'Temuri',
//     animalsForSale:['pig','cow','duck','chicken','horse'],
//     animalInStock:{
//         pig: {
//             price:600,
//             count:30
//         },
//         cow:{
//             price:950,
//             count:20
//         },
//         duck:{
//             price:150,
//             count:80
//         },
//         chicken:{
//             price:150,
//             count:100
//         },
//         horse:{
//             price:750,
//             count:10
//         },
//         elephant: {
//             price: 20000,
//         },
        
//     }

// };

// let farmerObjectParcers = (farmer) => {
//     let sum = 0;
//     farmer.animalsForSale.forEach ((animal)=>{
//         if(farmer.animalInStock[animal] && farmer.animalInStock[animal].price && farmer.animalInStock[animal].count) {
//         let total = farmer.animalInStock[animal].count * farmer.animalInStock[animal].price;
//         sum += total;
//     }

//     })
//     console.log(farmer.name +    ' send '   + sum)
// }
// farmerObjectParcers (farmerObject)

// let farmerObject = {
//     name: 'ყავრელა',
//     animalsForSale:['suck','dick','pussy','afci'],
//     animalsInStock:{
//           suck:{
//               price:100,
//               count:3
//           },
//           dick:{
//               price:50,
//               count:3
//           },
//           pussy:{
//               price:300,
//               count:3
//           },
//           afci:{
//               price:10,
//               count:1
//           },
//     }
// }
// let farmerObjectParcers = (farmer) =>{
//           let sum = 0;
//           farmer.animalsForSale.forEach((animal)=>{
//               if(farmer.animalsInStock[animal] && farmer.animalsInStock[animal].price && farmer.animalsInStock[animal].count ){
//                   let total = farmer.animalsInStock[animal].price * farmer.animalsInStock[animal].count;
//                   sum += total;
//               }
//           }
//           )
//           console.log(farmer.name +    ' send '   + sum)
// }
// farmerObjectParcers(farmerObject)

// let farmerObject = {
//     name:'besika',
//     animalsForSale:['cat', 'dog', 'parrot', 'seapig',],
//     animalInStock:{
//         cat:{
//             price:501,
//             count:150
//         },
//         dog:{
//             price:650,
//             count:140
//         },
//         parrot:{
//             price:350,
//             count:510
//         },
//         seapig:{
//             price:230,
//             count:520
//         },
//     }

// }

// let farmerObjectParcers = (farmer)=>{
//     let sum = 0;
//     farmer.animalsForSale.forEach((animal)=>{
//         if(farmer.animalInStock[animal] && farmer.animalInStock[animal].price && farmer.animalInStock[animal].count);
//          let total = farmer.animalInStock[animal].price * farmer.animalInStock[animal].count;
//          sum += total;
//     })
//     console.log(farmer.name +  ' send '  + sum)
// }

// farmerObjectParcers(farmerObject)

// let cartoons = 30;
// let toys = cartoons + 35;
// let consoles = cartoons - 10;
// let results = cartoons + toys + consoles;
// console.log(results)


// let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz';
// let regexp = /[A-F]/gi;
// console.log(alphabet.match(regexp));

// let txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz';
// let regexp = /[a-j]/gi;
// console.log(txt.match(regexp));

// let txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz';
// let regexp = /[A-V]/gi;
// console.log(txt.match(regexp));

// let txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz';
// let regexp = /[]/gi
// console.log(txt.matchAll(regexp));


// let example = 'hello world';
// if(example.includes('word')){
//     console.log(true)
// }else{
//     console.log(false)
// }

// let example = 'Hello world';
// console.log(example.replace(/Hello/gi, 'goodbay'))

// let example = 'Hello mother focking world';
// console.log(example.replace(/mother/gi, 'father'))

// let example = 'Hello mother focking world';
// if(example.includes('Helo')){
//     console.log(example.replace(/mother/gi, 'father'))
// }else{
//     console.log(false)
// }

// let example = 'Hello mother focking world';
// if(example.includes('Hello')){
//     console.log(example.repeat(3))
// }

// let example = 'Hello mother focking world';
// if(example.includes('word')){
//     console.log(example.repeat(3))
// }else{
//     console.log('chemi fexebi')
// }











