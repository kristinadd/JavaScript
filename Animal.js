class Animal{
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} says ${this.sound()}` // ; no need if it's single line
  }
}

class Cow extends Animal {
  sound() {
    return 'mooo';
  }
}

class Horse extends Animal {
  sound() {
    return 'neigh';
  }

  gallop() {
    return 'galloping woohoo';
  }
}

class Sheep extends Animal {
  sound() {
    return 'baaaaa';
  }
}

const horse = new Horse('CJ');
for (const a of [horse, new Cow('Bessie'), new Sheep('Little Lamb')]) {
  console.log(a.speak());
}
