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
const winnerCars = cars.slice(-4,-7)
console.log(winnerCars)
