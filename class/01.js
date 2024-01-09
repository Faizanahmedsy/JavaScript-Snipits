class Human {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}

const me = new Human("Faizan");

me.sayName();
