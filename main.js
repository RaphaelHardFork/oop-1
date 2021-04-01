// Importation des classes
const { Point } = require('./point')
const { Human } = require('./classInfo')


// Création des instances
// point.js
const p1 = new Point(1, 2)
const p2 = new Point(10, 11)

// classInfo.js
// Alice
const alice = new Human('Alice', 'Lidell', 28, ['python', 'R', 'solidity', 'substrate', 'rust', 'C++'])
// Bob
const bob = new Human('Bob', 'Lemon', 30, ['html', 'css', 'react.js', 'angular'])
// Charlie
const charlie = new Human('Charlie', 'Charlot', 8, ['python', 'javascript'])


// Test des différentes méthodes
// point.js
console.log(p1.distance(p2))


// classInfo.js
alice.printInfo()
console.log(charlie.canVote())
console.log(bob.mostSkilledDev(alice))