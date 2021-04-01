class Human {
  constructor(firstName, lastName, age, language) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
  }
  printInfo() {
    console.log(`First name: ${this.firstName}\nLast name: ${this.lastName}\nAge: ${this.age}`)
  }
  canVote() {
    if (this.age < 18) {
      return false
    } else {
      return true
    }
  }
  mostSkilledDev(Human) {
    if (this.language.length > Human.language.length) {
      return this.firstName
    } else if (this.language.length < Human.language.length) {
      return Human.firstName
    } else {
      return 'draw'
    }
  }
}

// Exportation de la class
exports.Human = Human


/*   (voir fichier main.js)
// Création des instances de Human
// Alice
const alice = new Human('Alice', 'Lidell', 28, ['python', 'R', 'solidity', 'substrate', 'rust', 'C++'])

// Bob
const bob = new Human('Bob', 'Lemon', 30, ['html', 'css', 'react.js', 'angular'])

// Charlie
const charlie = new Human('Charlie', 'Charlot', 8, ['python', 'javascript'])
*/


/*
// Test des différentes méthodes
alice.printInfo()
console.log(charlie.canVote())
console.log(bob.mostSkilledDev(alice))
*/