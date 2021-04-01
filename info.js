// Création des objets
const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language: ['python', 'R', 'solidity', 'substrate', 'rust', 'C++']
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['html', 'css', 'react.js', 'angular']
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['python', 'javascript']
}

// Fonction d'affichage des informations
const printInfo = (person) => {
  console.log(`First name: ${person.firstName}\nLast name: ${person.lastName}\nAge: ${person.age}`)
}
//printInfo(alice)


// Fonction canVote
const canVote = (person) => {
  if (person.age < 18) {
    return false
  } else {
    return true
  }
}
//console.log(canVote(charlie))


// Template des languages de programmations
// language: ['python','javascript','R','solidity','substrate','html','css','react.js','angular','rust','C++']

// Fonction mostSkilledDev
const mostSkilledDev = (person1, person2) => {
  if (person1.language.length > person2.language.length) {
    return person1.firstName
  } else if (person1.language.length < person2.language.length) {
    return person2.firstName
  } else {
    return 'draw'
  }
}

console.log(mostSkilledDev(bob, charlie))