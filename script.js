/* 
*========================
Name: Vernon Tan
Student ID: 
Class: 
Description: Ex3
=========================
*/

//alert("Hello from the external JavaScript file!");  

//1.	Ask the user for the total fare of the taxi ride using a prompt box. 
//Store the entered value as in a variable. Use the parseFloat() function to parse 
//the input string and store it as a floating point number.
let taxiFare = parseFloat(prompt("Enter the taxi fare:",100));
console.log(taxiFare);

//2.	Ask the user for the number of passengers in the taxi using another prompt box. 
//Store the entered value in a variable. Use the parseInt() function to parse the 
//input string and store it as an Integer.
let num_Passenger = parseInt(prompt("Enter the number of passengers:",2));
console.log(num_Passenger);

//3.	Ask the user if they would like to add a tip and 
let text = "Is tip given?"
let tip = confirm(text); //true if user clicks 'Ok' and false if user clicks 'Cancel'
console.log(tip);

//if so, the percentage of the tip they want to give. Use the parseFloat() function to parse the input string and 
//store the tip as a floating point number. You can use the confirm and prompt functions to check if the user wish add tip. 
let tipPercent=0;  //global variable to contain the tip percent
let totalFare;
if(tip==true){
    //prompt the user for the tip precentage
    tipPercent=parseFloat(prompt("Enter the tip precentage (%):"));
    totalFare = taxiFare*(1 + tipPercent/100);   //taxiFare + taxiFare*(tipPercent/100)
    console.log("totalFare with tip: "+totalFare);
}else{
    totalFare = taxiFare;
    console.log("totalFare without tip"+totalFare);
}

//4.	Calculate the amount each passenger has to pay by dividing the total fare by the number of passengers. 
//If a tip is added, calculate the total amount including the tip and divide it by the number of passengers.
let amtPerPerson = totalFare/num_Passenger;

//5.	Round the amount each passenger has to pay to two decimal places using the toFixed() method.
//6.	Display the amount each passenger has to pay using an alert box.
//alert("Amount each paseenger has to pay is: "+amtPerPerson.toFixed(2));

let message=
`
Taxi Fare: $${taxiFare}
Numebr of passengers: $${num_Passenger}
Tip Percentage: ${tipPercent}%
Amount each paseenger has to pay is: $${amtPerPerson.toFixed(2)}
`
alert(message);

//----------------------------------------------
/*
7.	Create a variable called passengerList that starts as an empty array. 
8.	Use prompt boxes to ask the user for two different passenger names and then place them in an array. Use an alert box to display the array.
9.	Experiment using pop, push, shift, unshift and splice, to add and remove items from the passengerList.
Refer to w3schools for the required array methods:
(a)	JavaScript Array push() Method (w3schools.com)
(b)	JavaScript Array unshift() Method (w3schools.com)
(c)	How To Use the Spread Operator (...) in JavaScript (w3schools.com)
(d)	JavaScript Array pop() Method (w3schools.com)
(e)	JavaScript Array splice() Method (w3schools.com)


*/