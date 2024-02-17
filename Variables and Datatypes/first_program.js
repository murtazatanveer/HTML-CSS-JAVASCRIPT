// /* Demo Code of Variables and Datatypes is JS */


// console.log("WELCOME TO JAVASCRIPT");
// console.log("MY Name is Murtaza Tanveer");
// console.log("My First Code in JS. (24th Jan 2023)");

// let full_name = "murtaza tanveer";

// {
  
//     age=21;
//   address = "jhelum";
//  // a = address + age;

// }
// //console.log("\n",a,"\n");
// {
   

//     console.log("My Introduction\n","Name : ",full_name , "\n","Age : ",age,"\n","Address : ",address);
// }



// let a = 10;
// let b= 5;

// console.log("Sum : ",a+b);
// console.log("Multiply : ",a*b);
// console.log("Sub : ",a-b);
// console.log("Sum : ",a/b);

//  if((a+b)==15){

// console.log(a+b);

//  }


// let str = "murtaza ";
// let str_2 = "tanveer";
// let number = 15;
// let num_2 = 5;

// console.log(str+str_2);

// if(isNaN(number*num_2)){

//     console.log("FINE");
//      console.log(number*num_2);
//      console.log(isNaN(number*num_2));

// }

// else{
//     console.log("NOT FINE");
//      console.log(number*num_2);
// }

// let variable_1;
// console.log(variable_1);

//  console.log("str + number = ",str+number);

//  console.log("str - number = ",str-number);


// let variable;
// console.log(variable); // Outputs: undefined

// function exampleFunction(param) {
//   console.log(param); // Outputs: undefined if the function is called without an argument
// }

// exampleFunction();

// let price =100;

// console.log(typeof(price));

// let uniqueKey = Symbol("unique");

// console.log(uniqueKey);

// name_1 = "murtaza";




// //Objects in JS

// let person= new Object();

//  person.name="murtaza";

//  person.age = 21;

//  person.address="Jhelum";

//  console.log(person);

//  { person = {

//  name : "murtaza",
//  age:21,
// address:"Jhelum"

// };

// person.is_student=false;

// }

// console.log(person);

// const person_2 = {};

// person_2.name = "moon";

// person_2.address = "p.d.khan";

// person_2.is_student = false;

// console.log(person_2);


//  console.log(" Name : ",person.name,"\n","Age : ",person.age,"\n","Address",person.address);

//  x = person;

// x.age=35;

// console.log("\n\n Name : ",person.name,"\n","Age : ",person.age,"\n","Address",person.address);

//  const person = {

//  name : "moon",
// age:21,
// address:"J",
// is_student:true

// }

// person.address="kot phaphra";

// person.gender="male";``

// console.log(person);

// alert("Murtaza here");

// {
//     let str="10";
//     let num = "5";
//     let result = num * str;
//     console.log(typeof(result),result);
// }

// {

// const vehicle = {

//     compay : "Honda",
//     type : "Bike",
//     colour : "Black",
//     cc : "CD70",
//     owner : {

//         name : "murtaza",
//         address : "jhelum",
//     }

// }

// vehicle.owner.age=21;


// console.log(vehicle.owner.address);

// console.log(vehicle);

//}

// let x = 10+9-13+17*2;

// console.log(x);

// console.log('9' - '5'); // -> 4
//  console.log('19' - '13' + '17'); // -> '617'
//  console.log('9' - '13' + 17); // -> 23
//  console.log('123' < 57); // -> false
//  console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

// if(isNaN("5" * "m") == true) {
//     console.log("equal");
// }

// else{
//     console.log("Not Equal");
// }

// console.log(typeof(isNaN("5" * "m")));

// const x=10;

// if(typeof(x)== "number"){
//     console.log("hello");
// }

//  // Using prompt to get input from the user
//  let userInput = prompt("Enter something:");

//  // Displaying the user input
//  console.log("User input:", userInput);

//   // Using prompt to get input from the user
//   let Input = prompt("Enter : ");

//   // Displaying the user input
//   console.log("User enters : ",Input);

// let x=10;
//  console.log(x);
// x="murtaza";
// console.log(x);


// let num = prompt("Enter Number : ");

// if(num%2==0){

//     alert("even number");
//     console.log(num,"is even");

// }

// else{
//     alert("Odd Number");
//     console.log(num,"is odd");
// }

 {

//     // Function to find Fctorial of a number

// //prompt("Enter Number yo want find Fictorial : ");

// let input = 5;

//  console.log("Fictorial of",input,"is",fictorial(input));

// //alert("Fictorial of " + input  + " is " + fictorial(input));

function fictorial(num){

    let fact=1;
    let i;

    for(i=1;i<=num;i++){

fact = fact*i;

    }

    return fact;
    
}


}

{

// funtion to find LCM of two numbers.

//let a=5,b=11;

//console.log("LCM of",a,"and",b,"is",lcm(5,11));

function lcm(x,y){

 let gre = 0;

if(x>y){gre = x;}

else{gre=y;}

let LCM = 0;

while(1){

    if((gre % x == 0) && (gre % y == 0)){

LCM = gre;
break;

    }
gre++;

}

return LCM;

}

}


// let student = {

//     name : "murtaza",
//     age : 21,
//     is_student : false

// };

// console.log(student);

// student = 10;

// console.log(student);

// let a = prompt("Enter num : ");

// if(a==10){alert("hello");}

//{ let a = "boolean" === (typeof(true)) ? "fine" : "not fine";

// console.log(a); }

// {

// let a=5;

// let b=++a;

// console.log(b);
// console.log(a);

// }

// {
// let ass="fine";

//  ass = ass + 1; // same as : ass++;

// console.log(ass);
// }


// {
//     let a = 5**2;

//     console.log(a);
// }

{
    let a = (true) === 1;
    console.log(a)
    console.log(!true===false);
}

