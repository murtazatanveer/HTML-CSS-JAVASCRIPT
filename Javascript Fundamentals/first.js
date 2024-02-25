

  // Number guessing game. This Game generates a random number between 1 and 500 and you want to guess it.

  number_guess();

 function number_guess(){

let num = Math.floor(Math.random() * 500) + 1;

let guess = 0;

let guess_counter = 0;

    while(1){

guess = prompt("Enter a Number : ");

guess_counter++;

if(num==guess){

alert("CONGRATULATIONS! You Guess correctly the original number is "+num+"\nYour total guesses are "+guess_counter);

break;

}

else{

if(guess>num){alert("Your Guess is greator than number");}

else{alert("Your Guess is Smaller than number");}

}


 }

    
 }


 /* Steven wants to build a very simple tip calculator for whenever he goes eating in a 
 restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
 300. If the value is different, the tip is 20% */


let total = 0;

function tip_calculator(bill){

let tip = bill >=50 && bill <=300 ? (15*bill)/100 : (20*bill)/100;

total = tip + bill;

return tip;

}

bill = 30;

//console.log("The bill was",bill,",the tip was",tip_calculator(bill),", and the total value",total);


{ //Template Strings


const birth_year = 2003;

let current_year = 2024;

const name = "Murtaza Tanveer"

const job = "Software Engineer";

    let me = `Hi I am ${name}, a ${current_year - birth_year} years old ${job}.`;

    console.log(me);
    
}

 // Type Conversion

{

let num_1 = 10;

let num_2 = "20";

let concatinate = num_1 + num_2;

let sum = num_1 +  Number(num_2);

console.log(`Concatinate : ${concatinate}\nSum : ${sum}`);

let n1 = 10;

let n2 = 5;

console.log(n1 + String(n2));

let x = 5 + "5" - 55;

console.log(x,typeof(x));

}

 // Truthy and Falsy Values

{
    // 5 Falsy values are 0 , undefined , null , "" (empty string) and NaN

    console.log(Boolean(0));
    console.log(Boolean(undefined));
    console.log(Boolean(NaN));
    console.log(Boolean(null));
    console.log(Boolean(""));

}

 


// Function to find Reverse of a number.

console.log(`Reverse of 1234 is ${Reverse(1234)}.`);

function Reverse(num)
{
    let digit = 0;
    let rev = 0;

    while(num!=0){

        digit = num % 10;
        rev = (rev * 10) + digit;
        num = Math.floor(num/10);
    
    }

return rev;

}



//Function that returns the nth Fab number.

 function fab(n) {


    let f0 = 0,f1 = 1,current_f = 0;

    for(let i = 2;i<=n;i++){

        current_f = f0 + f1;

        f0=f1;

        f1=current_f;
        

    }
    
    return current_f;

};


// Ternary Operator ?
{

    let age = 21;
    let vote = age>=18 ? "You have right to vote" : "You donot have right to vote";
    console.log(vote);

}



 // For loops

 {


   
    const person = {

        name: 'xyz',
        age: 21,
        city: 'lahore',
        Hobby: "Programmer"

      };

      
      


      for(let key in person){

        console.log(`${key} : ${person[key]}`);
        
      }



      const bike = {

        company : "Honda",
        
        cc : 70,

        owner : {

            name : "moon",
             age : 21,

        },

        colour : "Black",

       


      };
      
      

      let k;

      let i = 1;

      for(k in bike){

        if(i==3){

            let inner_key
        
            console.log(`${k} :\n`);

            for(inner_key in (bike.owner)){

                
                console.log(`     ${inner_key} : ${bike.owner[inner_key]}`);


            }



        }

        else{

        console.log(`${k} : ${bike[k]}`);}

        i++;

        
      }
      

      let numbers = [10,20,30,40];


      for(let index in numbers){

        console.log(`${index} : ${numbers[index]}`);


      }

    const university = {

        name : "Comsats",
        branch : "Abbottabad",
        is_private : true,
    }

    const array = Object.keys(university);

    for(let key of array){

        console.log(key);
    }

    const arr = Object.values(university);

   

    for(let key in arr){


        console.log(key+" : ",arr[key]);
    }

    


}

/* Write a program to print the marks of student in an object "marks" using for loop*/

{
    const marks = {

        stu_1 : 90,
        stu_2 : 80,
        stu_3 : 75,
        stu_4 : 50,
    }

    

    for(let i=0; i<= (Object.keys(marks).length-1); i++){

        console.log(`Marks of ${Object.keys(marks)[i]} is ${Object.values(marks)[i]}`);

    }

    /* Same problem using "for in" loop */

    for(let key in marks){

        console.log(`Marks of ${key} is ${marks[key]}`);
     }



}

/* Function to calculate age of a person */

calculate_age();

function calculate_age(){

const name = prompt("Enter your name : ");

const birth_year = Number(prompt("Enter the Year in which you were born : "));

const birth_month = Number(prompt("Enter the Month in which you were born : "));

const birth_date = Number(prompt("Enter the Date in which you were born : "));

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1; 
const date = today.getDate();

let age_month = 0, age_year = 0, age_Date = 0

if(month==birth_month && date==birth_date){

    age_year = year - birth_year;

}

else if(birth_month > month || ((birth_month==month)&&(birth_date>date))){

    age_year = (year - birth_year)-1;

if(month<birth_month){
    age_month = (12-birth_month) + month;
    age_Date = (30.42-birth_date) - (30.42-date);

}

    else {

        age_month = ((12-birth_month) + month) - 1;
        age_Date = birth_date-date;
    }   
}

else{

    age_year = (year - birth_year);

    if(month==birth_month){

    age_month = 0;
    age_Date = date - birth_date;

}

else{

    age_month =  (month-birth_month);

    if(date>birth_date){

        age_Date = date - birth_date;
        
    }

    else{

        age_month--;
        age_Date = 30.42-(birth_date-date);

    }
}
    
}

alert(`Hi ${name}, you are ${age_year} years , ${age_month} months and ${age_Date} days old`);

}


// Functions Expressions (Anonymous Functions) 

{
    

    const add = function(num_1 , num_2){

        return num_1 + num_2;
    } 

    console.log(add(10,20)); //Outputs : 30 

  console.log(typeof(add)); //Outputs : function

  console.log(typeof( add(10,20) )); //Outputs : number


const calculator = {

    add : function(num_1,num_2){

        return num_1 + num_2;
    },

    sub : function(num_1,num_2){

        return num_1 - num_2;
    },

    mul : function(num_1,num_2){

        return num_1 * num_2;
    },

    div : function(num_1,num_2){

        return num_1/num_2;
    }
}

console.log(calculator.mul(5,2)); // Outputs : 10

const print_hello = function(){
    console.log("HELLO");
}

print_hello();// Outputs : HELLO

}


// //Arrow Functions

{

    const add = (num_1,num_2) => {
        return num_1 + num_2;
    }

    console.log(add(10,20)); // Outputs : 30


    const calculator = {

            add : (num_1,num_2) => {
        
                return num_1 + num_2;
            },
        
            sub : (num_1,num_2)=>{
        
                return num_1 - num_2;
            },
        
            mul : (num_1,num_2)=>{
        
                return num_1 * num_2;
            },
        
            div : (num_1,num_2)=>{
        
                return num_1/num_2;
            }
        }

console.log(calculator.mul(10,5)); // Outputs : 50

const print_hello = () =>{console.log("Hello");}

print_hello(); // Outputs : Hello
    
{
    const print_hello = () =>"Hello";

let x = print_hello();

console.log(x); // Outputs : Hello

const square = (num) => num*num;

console.log(square(6)); // Outputs : 36

}

}


const square = (Num) => Num * Num;


function addAndSquare(n1,n2){

    return (n1 + n2)+(square(n1) + square(n2) );
}

console.log(addAndSquare(3,5)); // Outputs : 42


/* Coding Challenge : 

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!

Your tasks:

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
 */


const calcAverage = (s1,s2,s3) => (s1 + s2 + s3)/3;

function checkWinner(avgDolphins , avgKoalas){

if(avgDolphins >= (avgKoalas*2)){

    console.log(`Dolphins Win ( ${avgDolphins} Vs ${avgKoalas} )`);
}

else if(avgKoalas >= (avgDolphins*2)){

    console.log(`Koalas Win ( ${avgKoalas} Vs ${avgDolphins} )`);

}
else{
console.log("No Team Wins!");
}


}

// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

checkWinner(calcAverage(44,23,71),calcAverage(65,54,49));

// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

checkWinner(calcAverage(85,54,41),calcAverage(23,34,27));
