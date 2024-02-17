

// Number guessing game

//number_guess();

function number_guess(){

let num = Math.floor(Math.random() * 100) + 1;

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

console.log("The bill was",bill,",the tip was",tip_calculator(bill),", and the total value",total);
