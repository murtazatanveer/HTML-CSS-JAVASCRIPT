

// Number guessing game. This Game generates a random number between 1 and 500 and you want to guess it.

//number_guess();

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



// For in loop

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


    
}
