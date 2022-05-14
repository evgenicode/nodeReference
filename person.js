
console.log(__dirname, __filename);

class Person {
  constructor(inName, inAge) {
    this.name = inName;
    this.age = inAge;
  }

  greeting() {
    console.log(`My name is ${this.name} and I'm ${this.age} years old`)
  }
}



module.exports = Person;