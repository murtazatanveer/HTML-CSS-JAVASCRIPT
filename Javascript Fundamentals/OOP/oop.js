// this and new Keyword and Constructor Functions (Pre-ES6)

console.log(this);

function setUsername(name) {
  this.userName = name;
  return this;
}

let user1 = setUsername("@murtaza");
console.log(user1.userName);
let user2 = setUsername("@ali");
console.log(user1.userName);
console.log(user2.userName);
console.log(user1.constructor);

console.log(this.userName);

let u1 = new setUsername("@MURTAZA");
console.log(u1.userName);
let u2 = new setUsername("@ALI");
console.log(u1.userName);
console.log(u2.userName);

console.log(this.userName);

console.log(u1.constructor);

// Classes in JS.

class student {
  name;
  age;
  regno;
  cgpa;
  isGraduate;

  constructor(name, age, regno, cgpa, isGraduate) {
    this.name = name;
    this.age = age;
    this.regno = regno;
    this.cgpa = cgpa;
    this.isGraduate = isGraduate;
  }

  displayDetails() {
    console.log(
      this.name + "\n" + this.age + "\n" + this.regno + "\n" + this.cgpa
    );
  }

  updateCgpa(c) {
    cgpa = c;
  }
}

let s1 = new student("murtaza", 22, "SP23-BSE-096", 3, false);

console.log(s1);
s1.displayDetails();

let s2 = {
  s: new student("ali", 22, "100", 3, false),
};

console.log(s2.s);

let arr = [s1, s2];

console.log(arr);

console.log(typeof student);

// Inheritence in JS.

class employee {
  constructor(name, salary, dep) {
    this.name = name;
    this.salary = salary;
    this.dep = dep;
  }
  increaseSalary(sal) {
    this.salary += sal;
  }
}

class manager extends employee {
  constructor(name, salary, dep, post) {
    super(name, salary, dep);
    this.post = post;
  }
}

let m1 = new manager("murtaza", 10000, "xyz", "HR");

console.log(m1);
m1.increaseSalary(3000);
console.log(m1);

// Multiple Inheritance: No, not directly. Use Composition or Mixins instead.
//Multilevel Inheritance: Yes, absolutely. This is a fundamental way to build inheritance hierarchies in JavaScript.

// Level 1: Grandparent Class
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
    console.log(`${this.brand} vehicle is starting.`);
  }
}

// Level 2: Parent Class (inherits from Vehicle)
class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // Call Vehicle's constructor
    this.model = model;
  }
  drive() {
    console.log(`${this.brand} ${this.model} is driving.`);
  }
}

// Level 3: Child Class (inherits from Car, which inherited from Vehicle)
class ElectricCar extends Car {
  constructor(brand, model, batteryLife) {
    super(brand, model); // Call Car's constructor
    this.batteryLife = batteryLife;
  }
  charge() {
    console.log(
      `${this.brand} ${this.model} is charging. Battery: ${this.batteryLife} hours.`
    );
  }
  // Overriding the start method from Vehicle
  start() {
    console.log(`${this.brand} ${this.model} (Electric) is silently starting.`);
  }
}

const tesla = new ElectricCar("Tesla", "Model 3", 8);

tesla.start(); // Calls ElectricCar's start (overridden)
// Output: Tesla Model 3 (Electric) is silently starting.

tesla.drive(); // Calls Car's drive (inherited from Car)
// Output: Tesla Model 3 is driving.

tesla.charge(); // Calls ElectricCar's charge (own method)
// Output: Tesla Model 3 is charging. Battery: 8 hours.

console.log(tesla.brand); // Output: Tesla (inherited from Vehicle via Car)
console.log(tesla.model); // Output: Model 3 (inherited from Car)

// Static in JS

let x = 99;

class A {
  constructor() {
    console.log(x);
    x++;
  }
}

let ob = new A();
let ob2 = new A();
let ob3 = new A();

class users {
  static userCounter = 0;
  constructor(userName) {
    this.userName = userName;
    users.userCounter++;
  }
}

console.log(users.userCounter);

const persons = [
  new users("person1"),
  new users("person2"),
  new users("person3"),
];

console.log(users.userCounter);
