/* Demo Code of Variables and Datatypes is JS */

console.log("WELCOME TO JAVASCRIPT");

console.log("MY Name is Murtaza Tanveer");
console.log("My First Code in JS. (24th Jan 2024)");

let full_name = "murtaza tanveer";

{
  age = 20;
  address = "jhelum";
  // a = address + age;
}
//console.log("\n",a,"\n");
{
  console.log(
    "My Introduction\n",
    "Name : ",
    full_name,
    "\n",
    "Age : ",
    age,
    "\n",
    "Address : ",
    address
  );
}

let a_ = 10;
let b_ = 5;

console.log("Sum : ", a_ + b_);
console.log("Multiply : ", a_ * b_);
console.log("Sub : ", a_ - b_);
console.log("Sum : ", a_ / b_);

if (a_ + b_ == 15) {
  console.log(a_ + b_);
}

console.log("Hoisting in JS");

console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10

//console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;
console.log(myLet); // Output: 20

//console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 30;
console.log(myConst); // Output: 30

// console.log(myLetFunc); // ReferenceError: Cannot access 'myLetFunc' before initialization
// myLetFunc();           // ReferenceError: Cannot access 'myLetFunc' before initialization

let myLetFunc = function () {
  console.log("This is a function expression with let.");
};

myLetFunc(); // Output: This is a function expression with let.

let str = "murtaza ";
let str_2 = "tanveer";
let number = 15;
let num_2 = 5;

console.log(str + str_2);

console.log(isNaN("5" - 6));
console.log(isNaN("5+2" - 6));

console.log(10 - 3 + (5 * 4 - 2) / 2);

if (isNaN(number * num_2)) {
  console.log("FINE");
  console.log(number * num_2);
  console.log(isNaN(number * num_2));
} else {
  console.log("NOT FINE");
  console.log(number * num_2);
}

let variable_1;
console.log(variable_1);

console.log("str + number = ", str + number);

console.log("str - number = ", str - number);

let variable;
console.log(variable); // Outputs: undefined

function exampleFunction(param = "murtaza") {
  console.log(param); // Outputs: undefined if the function is called without an argument
}

console.log(exampleFunction);
exampleFunction();
exampleFunction({ name: "murtaza", age: 22, heigth: 5.8 });

let price = 100;

console.log(typeof price);

let uniqueKey = Symbol("unique");

console.log(uniqueKey);

name_1 = "murtaza";

//Objects in JS

let person = new Object();

person.name = "murtaza";

person.age = 21;

person.address = "Jhelum";

console.log(person);

{
  person = {
    name: "murtaza",
    age: 30,
    address: "Jhelum",
  };

  person.is_student = false;
}

console.log(person);

const person_2 = {};

person_2.name = "moon";

person_2.address = "p.d.khan";

person_2.is_student = false;

console.log(person_2);

console.log(
  " Name : ",
  person.name,
  "\n",
  "Age : ",
  person.age,
  "\n",
  "Address",
  person.address
);

let x = person;

x.age = 35;
x.address = "abbottabad";
x.address = {
  num: 10,
  b: function () {
    console.log("Inside b");
  },
};

console.log(
  "\n\n Name : ",
  person.name,
  "\n",
  "Age : ",
  person.age,
  "\n",
  "Address",
  person.address
);

x.address.b();

const person2 = {
  name: "moon",
  age: 21,
  address: "J",
  is_student: true,
};

person2.address = "kot phaphra";

person2.gender = "male";

person2.id = 96;

console.log(person2);

// alert("Murtaza here");

{
  let str = "10";
  let num = "5";
  let result = num * str;
  console.log(typeof result, result);
}

{
  const vehicle = {
    compay: "Honda",
    type: "Bike",
    colour: "Black",
    cc: "CD70",
    owner: {
      name: "murtaza",
      address: "jhelum",
    },
  };

  vehicle.owner.age = 21;

  console.log("Vehicle Details : " + vehicle);
  console.log(typeof vehicle.owner);
  console.log("Address: " + vehicle.owner);
}

let x_ = 10 + 9 - 13 + 17 * 2;

console.log(x_);

console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> '617'
console.log("9" - "13" + 17); // -> 13
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143

if (isNaN("5" * "m") == true) {
  console.log("equal");
} else {
  console.log("Not Equal");
}

console.log(typeof isNaN("5" * "m"));

if (typeof 10 == "number") {
  console.log("hello");
}

// // Using prompt to get input from the user
// let userInput = prompt("Enter something:");

// // Displaying the user input
// console.log("User input:", userInput);

// // Using prompt to get input from the user
// let Input = prompt("Enter : ");

// // Displaying the user input
// console.log("User enters : ", Input);

let xx = 10;
console.log(xx);
xx = "murtaza";
console.log(xx);

// let num = prompt("Enter Number : ");

// if (num % 2 == 0) {
//   alert("even number");
//   console.log(num, "is even");
// } else {
//   alert("Odd Number");
//   console.log(num, "is odd");
// }

// {
//   //     // Function to find Fctorial of a number

//   // //prompt("Enter Number yo want find Fictorial : ");

//   // let input = 5;

//   //  console.log("Fictorial of",input,"is",fictorial(input));

//   // //alert("Fictorial of " + input  + " is " + fictorial(input));

//   function fictorial(num) {
//     let fact = 1;
//     let i;

//     for (i = 1; i <= num; i++) {
//       fact = fact * i;
//     }

//     return fact;
//   }
// }

// {
//   // funtion to find LCM of two numbers.

//   //let a=5,b=11;

//   //console.log("LCM of",a,"and",b,"is",lcm(5,11));

//   function lcm(x, y) {
//     let gre = 0;

//     if (x > y) {
//       gre = x;
//     } else {
//       gre = y;
//     }

//     let LCM = 0;

//     while (1) {
//       if (gre % x == 0 && gre % y == 0) {
//         LCM = gre;
//         break;
//       }
//       gre++;
//     }

//     return LCM;
//   }
// }

let student = {
  name: "murtaza",
  age: 21,
  is_student: false,
};

console.log(student);

student = 10;

console.log(student);

// let a = prompt("Enter num : ");

// if (a == 10) {
//   alert("hello");
// }

{
  let a = "boolean" === typeof true ? "fine" : "not fine";

  console.log(a);
}

{
  let a = 5;

  let b = ++a;

  console.log(b);
  console.log(a);
}

{
  let ass = "fine";

  ass = ass + 1; // same as : ass++;

  console.log(ass);
}

{
  let a = 5 ** 3; // square of a number

  console.log(a);
}

{
  let a = true == 1;
  console.log(a);
  console.log(!true === false);
}

// // Number guessing game. This Game generates a random number between 1 and 500 and you want to guess it.

// // number_guess();

// function number_guess() {
//   let num = Math.floor(Math.random() * 500) + 1;

//   let guess = 0;

//   let guess_counter = 0;

//   while (1) {
//     guess = prompt("Enter a Number : ");

//     guess_counter++;

//     if (num == guess) {
//       alert(
//         "CONGRATULATIONS! You Guess correctly the original number is " +
//           num +
//           "\nYour total guesses are " +
//           guess_counter
//       );

//       break;
//     } else {
//       if (guess > num) {
//         alert(`${guess} is greator than original number`);
//       } else {
//         alert(`${guess} is smaller than original number`);
//       }
//     }
//   }
// }

// /* Steven wants to build a very simple tip calculator for whenever he goes eating in a
//  restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
//  300. If the value is different, the tip is 20% */

// let total = 0;

// function tip_calculator(bill) {
//   let tip = bill >= 50 && bill <= 300 ? (15 * bill) / 100 : (20 * bill) / 100;

//   total = tip + bill;

//   return tip;
// }

// bill = 30;

// //console.log("The bill was",bill,",the tip was",tip_calculator(bill),", and the total value",total);

{
  //Template Strings

  const birth_year = 2003;

  let current_year = 2024;

  const name = "Murtaza Tanveer";

  const job = "Software Engineer";

  let me = `Hi I am ${name}, a ${current_year - birth_year} years old ${job}.`;

  console.log(me);
}

// Type Conversion

{
  let num_1 = 10;

  let num_2 = "20";

  let concatinate = num_1 + num_2;

  let sum = num_1 + Number(num_2);

  console.log(`Concatinate : ${concatinate}\nSum : ${sum}`);

  let n1 = 10;

  let n2 = 5;

  console.log(n1 + String(n2));

  let x = 5 + "5" - 55;

  console.log(x, typeof x);

  console.log(Number("123")); // 123
  console.log(Number("12.3")); // 12.3
  console.log(Number("")); // 0
  console.log(Number(" ")); // 0
  console.log(Number("hello")); // NaN
  console.log(Number(true)); // 1
  console.log(Number(false)); // 0
  console.log(Number(null)); // 0
  console.log(Number(undefined)); // NaN
  console.log(Number("10a")); // NaN
  console.log(Number(NaN)); // NaN
}

// Truthy and Falsy Values

{
  // 5 Falsy values are 0 , undefined , null , "" (empty string) and NaN

  console.log(Boolean(0));
  console.log(Boolean(undefined));
  console.log(Boolean(NaN));
  console.log(Boolean(null));
  console.log(Boolean(""));
  console.log(Boolean(Number("hello")));
}

// // Function to find Reverse of a number.

// console.log(`Reverse of 1234 is ${Reverse(1234)}.`);

// function Reverse(num) {
//   let digit = 0;
//   let rev = 0;

//   while (num != 0) {
//     digit = num % 10;
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10);
//   }

//   return rev;
// }

// //Function that returns the nth Fab number.

// function fab(n) {
//   let f0 = 0,
//     f1 = 1,
//     current_f = 0;

//   for (let i = 2; i <= n; i++) {
//     current_f = f0 + f1;

//     f0 = f1;

//     f1 = current_f;
//   }

//   return current_f;
// }

// // Ternary Operator ?
// {
//   let age = 21;
//   let vote =
//     age >= 18 ? "You have right to vote" : "You donot have right to vote";
//   console.log(vote);
// }

// For loops

{
  const person = {
    name: "xyz",
    age: 50,
    city: "lahore",
    Hobby: "Programmer",
  };

  console.log(person["age"]);

  for (let key in person) {
    console.log(`${key} : ${person[key]}`);
  }

  for (let values of Object.values(person)) {
    console.log(values);
  }

  for (let values of Object.entries(person)) {
    console.log(values);
  }

  // let arr = [1, 2, 3];
  // console.log(typeof [1, 2, 3]);

  const bike = {
    company: "Honda",

    cc: 70,

    owner: {
      name: "moon",
      age: 21,
    },

    colour: "Black",
  };

  let k;

  let i = 1;

  for (k in bike) {
    if (i == 3) {
      let inner_key;

      console.log(`${k} :\n`);

      for (inner_key in bike.owner) {
        console.log(`     ${inner_key} : ${bike.owner[inner_key]}`);
      }
    } else {
      console.log(`${k} : ${bike[k]}`);
    }

    i++;
  }

  let numbers = [10, 20, 30, 40];

  for (let index in numbers) {
    console.log(`${index} : ${numbers[index]}`);
  }

  const university = {
    name: "Comsats",
    branch: "Abbottabad",
    is_private: true,
  };

  const array = Object.keys(university);

  for (let key of array) {
    console.log(key);
  }

  const arr = Object.values(university);

  for (let key in arr) {
    console.log(key + " : ", arr[key]);
  }
}

// /* Write a program to print the marks of student in an object "marks" using for loop*/

// {
//   const marks = {
//     stu_1: 90,
//     stu_2: 80,
//     stu_3: 75,
//     stu_4: 50,
//   };
//   const choice = "stu_2";

//   console.log(marks[choice]);

//   for (let i = 0; i <= Object.keys(marks).length - 1; i++) {
//     console.log(
//       `Marks of ${Object.keys(marks)[i]} is ${Object.values(marks)[i]}`
//     );
//   }

//   /* Same problem using "for in" loop */

//   for (let key in marks) {
//     console.log(`Marks of ${key} is ${marks[key]}`);
//   }
// }

// // /* Function to calculate age of a person */

// //calculate_age();

// function calculate_age() {
//   const name = prompt("Enter your name : ");

//   const birth_year = Number(prompt("Enter the Year in which you were born : "));

//   const birth_month = Number(
//     prompt("Enter the Month in which you were born : ")
//   );

//   const birth_date = Number(prompt("Enter the Date in which you were born : "));

//   const today = new Date();

//   const year = today.getFullYear();
//   const month = today.getMonth() + 1;
//   const date = today.getDate();

//   let age_month = 0,
//     age_year = 0,
//     age_Date = 0;

//   if (month == birth_month && date == birth_date) {
//     age_year = year - birth_year;
//   } else if (
//     birth_month > month ||
//     (birth_month == month && birth_date > date)
//   ) {
//     age_year = year - birth_year - 1;

//     if (month < birth_month) {
//       age_month = 12 - birth_month + month;
//       age_Date = 30.42 - birth_date - (30.42 - date);
//     } else {
//       age_month = 12 - birth_month + month - 1;
//       age_Date = birth_date - date;
//     }
//   } else {
//     age_year = year - birth_year;

//     if (month == birth_month) {
//       age_month = 0;
//       age_Date = date - birth_date;
//     } else {
//       age_month = month - birth_month;

//       if (date > birth_date) {
//         age_Date = date - birth_date;
//       } else {
//         age_month--;
//         age_Date = 30.42 - (birth_date - date);
//       }
//     }
//   }

//   alert(
//     `Hi ${name}, you are ${age_year} years , ${age_month} months and ${age_Date} days old`
//   );
// }

// Functions Expressions (Anonymous Functions)

{
  const add = function (num_1, num_2) {
    return num_1 + num_2;
  };

  console.log(add(10, 20)); //Outputs : 30

  console.log(typeof add); //Outputs : function

  console.log(typeof add(10, 20)); //Outputs : number

  let sub = function (a, b) {
    return a - b;
  };

  if (true) {
    function sub(a, b) {
      return a * b;
    }
    console.log("Subtraction : " + sub(10, 5));
  }
  console.log("Subtraction : " + sub(10, 5));

  var v = 99;
  console.log(v);
  var v;
  console.log(v);

  const calculator = {
    add: function (num_1, num_2) {
      return num_1 + num_2;
    },

    sub: function (num_1, num_2) {
      return num_1 - num_2;
    },

    mul: function (num_1, num_2) {
      console.log("my age " + age);
      return num_1 * num_2;
    },

    div: function (num_1, num_2) {
      return num_1 / num_2;
    },
  };

  console.log(calculator.mul(99, 2)); // Outputs : 198

  const print_hello = function () {
    console.log("__ HELLO __");
  };

  print_hello(); // Outputs : HELLO

  function func() {
    console.log(arguments[0]); // Doesnot work in arrow functions.
    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  }

  func("Welcome to Javascript", 10, {
    name: "smurtaza",
    age: 22,
    isStudent: true,
  });

  function func2(a, b, ...remainingArgs) {
    console.log(a + " " + b);
    for (let i = 0; i < remainingArgs.length; i++) {
      console.log(remainingArgs[i]);
    }
    remainingArgs[3][2] = 99;
  }

  let arr = [1, 2, 3, 4, 5];
  console.log(arr);
  func2(10, 20, "I", "Like", "JS", arr);
  console.log(arr);
}

// //Arrow Functions

{
  const add = (num_1, num_2) => {
    return num_1 + num_2;
  };

  console.log(add(10, 20)); // Outputs : 30

  const calculator = {
    add: (num_1, num_2) => {
      return num_1 + num_2;
    },

    sub: (num_1, num_2) => {
      return num_1 - num_2;
    },

    mul: (num_1, num_2) => {
      return num_1 * num_2;
    },

    div: (num_1, num_2) => {
      return num_1 / num_2;
    },
  };

  console.log(calculator.mul(10, 5)); // Outputs : 50

  const print_hello = () => {
    console.log("Hello");
  };

  print_hello(); // Outputs : Hello

  {
    const print_hello = () => "Hello";

    let x = print_hello;

    console.log(x()); // Outputs : Hello

    const square = (num) => num * num;

    console.log(square(6)); // Outputs : 36
  }
}

const square = (Num) => Num * Num;

function addAndSquare(n1, n2) {
  return n1 + n2 + (square(n1) + square(n2));
}

console.log(addAndSquare(3, 5)); // Outputs : 42

// // /* Coding Challenge :

// // Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// // gymnastics discipline, which works differently.
// // Each team competes 3 times, and then the average of the 3 scores is calculated (so
// // one average score per team).
// // A team only wins if it has at least double the average score of the other team.
// // Otherwise, no team wins!

// // Your tasks:

// // 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// // 2. Use the function to calculate the average for both teams
// // 3. Create a function 'checkWinner' that takes the average score of each team
// // as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// // to the console, together with the victory points, according to the rule above.
// // Example: "Koalas win (30 vs. 13)"
// // 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// // Data 2
// // 5. Ignore draws this time
// // Test data:
// // § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// // § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// //  */

// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins Win ( ${avgDolphins} Vs ${avgKoalas} )`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas Win ( ${avgKoalas} Vs ${avgDolphins} )`);
//   } else {
//     console.log("No Team Wins!");
//   }
// }

// // Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

// checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));

// // Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

// Arrays

{
  const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];

  function reverse_numbers(numbers) {
    let temp = 0;

    for (let i = 0; i < numbers.length / 2; i++) {
      temp = numbers[numbers.length - i - 1];

      numbers[numbers.length - i - 1] = numbers[i];

      numbers[i] = temp;
    }

    return numbers;
  }
  console.log(numbers);
  const reversedNumbers = reverse_numbers([...numbers]);
  reverse_numbers(numbers);
  console.log(reversedNumbers);
  console.log(numbers);
}

// /*{
//     let arr = new Array();

//     for(let i=0;i<5;i++){

//         arr[i] = Number(prompt(`Enter ${i+1} Number : `));

//     }

// }*/

{
  const arr = [
    2,
    4,
    function (n1, n2) {
      return n1 + n2;
    },
    6,
  ];

  console.log(arr[2](2, 4));
}

// //Arrays Operations

{
  const evenNumbers = [4, 6, 8, 10];

  // Add an element at the end of an array

  evenNumbers.push(12);
  console.log(evenNumbers);

  // Add an element at the start of an array

  evenNumbers.unshift(2);
  console.log(evenNumbers);

  // Remove an element from the end of an array

  let elementToRemove = evenNumbers.pop();
  console.log(`Removed element from end is ${elementToRemove}`);
  console.log(evenNumbers);

  // Remove an element from the start of an array

  elementToRemove = evenNumbers.shift();
  console.log(`Removed element from start is ${elementToRemove}`);
  console.log(evenNumbers);

  // Checking that an element is present in an array

  let IsElementExist = evenNumbers.includes(8);

  console.log(IsElementExist);

  IsElementExist = evenNumbers.includes(12);

  console.log(IsElementExist);

  // Concatination of two arrays

  const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const digits = [1, 2, 3, 4, 5];

  const digitsAndAlphabets = digits.concat(alphabets);

  console.log(digitsAndAlphabets);

  // Returns a shallow copy of a portion of an array into a new array.

  const fewAlphabets = alphabets.slice(2, 6);

  console.log(fewAlphabets);

  // Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

  const x = 10;

  alphabets.splice(1, 4, x);

  console.log(alphabets);

  // Reverse an array

  const oddNumbers = [1, 3, 5, 7, 9];
  const rev = oddNumbers.reverse();
  console.log(rev + "  " + oddNumbers);
}

// /*  Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.

// Your tasks:

// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip

// Test data: 125, 555 and 44 */

// {
//   const bill = [125, 555, 44, 300, 1000, 600];

//   const tip = new Array();

//   const total = new Array();

//   function calcTip(bill) {
//     for (let i = 0; i < bill.length; i++) {
//       tip[i] =
//         bill[i] >= 50 && bill[i] <= 300
//           ? (15 * bill[i]) / 100
//           : (20 * bill[i]) / 100;

//       total[i] = tip[i] + bill[i];
//     }
//   }

//   calcTip(bill);

//   console.log("Tip : ", tip, "\nTotal : ", total);
// }

// // Object Methods

{
  const person = {
    name: "moon",
    birthYear: 2003,
    Loc: "Abbottabad",

    age: function () {
      this.a = 2024 - this.birthYear;
      return this.a;
    },

    education: {
      institutionName: "Comsats",
      isPass: true,
    },
  };

  console.log(person.age());
  console.log(person.a);

  /*Coding Challenge :
  
  Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
  implement the calculations! Remember: BMI = mass / height ** 2 = mass
  / (height * height) (mass in kg and height in meter)
  
  Your tasks:
  1. For each of them, create an object with properties for their full name, mass, and
  height (Mark Miller and John Smith)
  
  2. Create a 'calcBMI' method on each object to calculate the BMI (the same
  method on both objects). Store the BMI value to a property, and also return it
  from the method
  
  3. Log to the console who has the higher BMI, together with the full name and the
  respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
  
  Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
  tall. */

  const calculateBMI = function () {
    const mark = {
      fullName: "Mark Miller",
      mass: 78,
      height: 1.69,
      calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
      },
    };

    const John = {
      fullName: "John Smith",
      mass: 92,
      height: 1.95,
      calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
      },
    };

    if (mark.calcBMI() > John.calcBMI()) {
      console.log(
        `${mark["fullName"]} BMI (${mark.BMI}) is higher than ${John.fullName} BMI (${John.BMI})`
      );
    } else {
      console.log(
        `${John["fullName"]} BMI (${John.BMI}) is higher than ${mark.fullName} BMI (${mark.BMI})`
      );
    }
  };

  calculateBMI();
}

// Loops and Arrays in JS.

{
  let numbers = [1, 2, 3, 5, 6, [10, 20, 30], 7, 8];

  for (let i = 0; i < numbers.length; i++) {
    if (i == 5) {
      for (let j = 0; j < numbers[i].length; j++) {
        console.log(numbers[i][j]);
      }
      i++;
    }

    console.log(numbers[i]);
  }

  let tableOfFive = [5, 10, 25, 20, 25, 30, 35, 40, 45, 50];

  for (let i = 0; i < 10; i++) {
    if (tableOfFive[i] % 10 != 0) {
      continue;
    }
    console.log(tableOfFive[i]);
  }

  //   /*let dice = Math.floor(Math.random() * 10) + 1;

  // while(dice!==5){
  //     console.log(`Rolled : ${dice}`);
  //     dice = Math.floor(Math.random() * 10) + 1;
  // }*/
}

// // // Strings in JS.

// {
//   let name = "abcde";
//   const reverseOfString = function (str) {
//     let rev = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//       rev = rev + str[i];
//     }

//     return rev;
//   };

//   function stringReverse(str) {
//     str = str.split("");
//     let temp;

//     for (let i = 0; i < Math.floor(str.length / 2); i++) {
//       temp = str[str.length - i - 1];
//       str[str.length - i - 1] = str[i];
//       str[i] = temp;
//     }

//     return str.join("");
//   }

//   console.log(reverseOfString(name));
//   console.log(stringReverse(name));
// }

// // // Strings Methods in JS.

// {
//   let str = "javascript";
//   let fun = " is fun";
//   let javascript = "";

//   // ASCII value of a character
//   const code = str.charCodeAt(1);
//   console.log(code); // Outputs : 97

//   // Concatinate two or more strings
//   javascript = str.concat(fun);
//   console.log(javascript); // Outputs : javascript is fun

//   //Checking that a character or string is present in String to check
//   const isStrExist = javascript.includes("fun");
//   console.log(isStrExist); // Outputs :true

//   // search for the index where character or string is present
//   const Index = javascript.search("is");
//   console.log(Index); // Outputs : 11

//   // Replace a String from a specific string
//   const replace = javascript.replace("is fun", "is amazing");
//   console.log(replace); // Outputs : javascript is amazing

//   // Return the specific part of the string
//   const part = javascript.slice(4, 10);
//   console.log(part); // Outputs : script

//   // Split the string into an array of characters
//   javascript = javascript.split("");
//   console.log(javascript);

//   // Join the array or characters into single string
//   javascript = javascript.join("");
//   console.log(javascript);

//   // Converts the string into Uppercase;
//   javascript = javascript.toUpperCase();
//   console.log(javascript); // Outputs : JAVASCRIPT IS FUN

//   // Converts the string into Lowecase
//   javascript = javascript.toLowerCase();
//   console.log(javascript); // Outputs : javascript is fun
// }

// Difference between Arrow Functions and Simple functions in objects

console.log(
  "Difference between Arrow Functions and Simple functions in objects"
);

{
  const university = {
    name: "Comsats",
    address: "Abbottabad",
    establishYear: 1985,

    yearsToEstablish: function (yearPresent) {
      return yearPresent - this.establishYear;
    },
  };

  console.log(university.yearsToEstablish(2024));
}

{
  var estYear = 1985;

  const university = {
    name: "Comsats",
    address: "Abbottabad",

    yearsToEstablish: (yearPresent) => {
      return yearPresent - this.estYear;
    },
  };

  console.log(university.yearsToEstablish(2024));
}

{
  // Global scope
  function globalFunc() {
    console.log("I'm global!");
  }
  globalFunc(); // Works

  if (true) {
    function blockScopedFunc() {
      console.log("I'm block-scoped (in modern JS strict mode)!");
    }
    blockScopedFunc(); // Works here
  }
  blockScopedFunc(); // ReferenceError: blockScopedFunc is not defined (outside the block in modern strict mode)

  function outerFunc() {
    function innerFunc() {
      console.log("I'm function-scoped to outerFunc!");
    }
    innerFunc(); // Works here
  }
  //innerFunc(); // ReferenceError: innerFunc is not defined (outside outerFunc)
}

//morning(); // ReferenceError: Cannot access 'morning' before initialization

const morning = function () {
  console.log("Good Morning");
};

morning();
blockScopedFunc();

console.log(v2);
//evening(); // Uncaught TypeError: evening is not a function
var v1 = 10; // Global scope
if (true) {
  function evening() {
    console.log("Good Evening");
  }
  var v2 = 20; // Function-scoped (or global if in global scope)
  console.log(v2); // 20
}
console.log(v2); // 20 - accessible outside the block due to var's function-scoping

const ob = {
  callingBlockScopedFunc: () => {
    this.blockScopedFunc();
  },
};

ob.callingBlockScopedFunc();


