class Person {
  constructor(name = 'Default', age='0') {
    this.name = name;
    this.age = age;
  }
  greetings(){
    return "Hey!";
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old`
  }
}

const me = new Person('Dan Schwartz', 27);

console.log(me.getDescription());
console.log('Hat')

//add a second optional item age with default zero
//getDescription return string - Dan Schwartz is Age year(s) old.
