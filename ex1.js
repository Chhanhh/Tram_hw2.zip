// Create a function to calculate input
// Add function used method 2 from chapter 5 tut2

const sumMethod1 = function(num1, num2) {
    return num1 + num2;
}

console.log(`The added result is: ${sumMethod1(5, 5)}`)

// Subtract number used method 1

function sumMethod2(num1, num2) {
    return num1 - num2;
}

const sum2 = sumMethod2(7, 2)
console.log(`The subtracted result is: ${sum2}`);

// Multiply number used method 3
const sumMethod3 = (num1, num2) => {
    return num1 * num2;
}

console.log(`The multiplied result is: ${sumMethod3(4, 5)}`);

// Divide number
const sumMethod4 = (num1, num2) => {
    return num1/num2;
}

console.log(`The divided result is: ${sumMethod4(10, 5)}`)

// Convert Fahrenheit to Celsius
function fToCel(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5/9;
    var message = `${fTemp} \xB0F is ${fToCel} \xB0C.`;
        console.log(message);
}
fToCel(32)
fToCel(98.7)
fToCel(212)

// Add a circle object definition

const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
    //method named as "circumference"
    circumference: function () {
        // calculate circumference by using formula of 2 * pi * r
        // here, "r" is accessed from outside
        let circumferenceVar = 2 * Math.PI * r;

        //return calculated circumferenceVar circumference
        return circumferenceVar;
    },

    //method named as "area"
    area: function () {
        //calculate area by using formula of pi * r * r
        // here, "r" is also accessed from outside
        let arCircleVar = Math.PI * r * r;

        // return calculated arCircleVar area
        return arCircleVar;
    },
};

console.log(`Its circumference is ${circle.circumference()}`);

console.log(`Its area is ${circle.area()}`);

// Write a program that creates the following array, then calculates and shows the following:
// Declaring array
const values = [3,11,7,2,9,10];
// Initializing Sum value with first element of array
var Sum = values[0]
// Initializing Max value with first element of array
var Max = values[0]
// Initializing Min value with first element of array
var Min = values[0]
// Loop to iterate through every element of array
for(let i=1;i<values.length;i++) {
    // Adding value to Sum
    Sum=Sum+values[i];
    // Checking Max condition
    if(Max<values[i]) {
        Max=values[i]
    }
    // Checking Min condition
    if(Min>values[i]) {
        Min=values[i]
    }
}
console.log("Sum of elements of given array is:",Sum)
console.log("Maximum of element of given array is:",Max)
console.log("Min of the element of given array is:",Min)


let readline = require('readline-sync');

// create an empty array words to store each word entered by the user(except "stop")
words = []

// prompt the user to enters words one by one 
console.log("Enter words one by one (Enter \"stop\" to exit the input):");

// read the first word
word = readline.question("");

// loop that continues until the user enters "stop" in any case
// convert the input to lowercase and then compare with "stop"
while(word.toLowerCase() != "stop") {
	
	words.push(word); // insert the read word at the end of words array
	word = readline.question(""); // read the next word
}

// array is not empty, display the words entered by joining the array contents separated by a space
if(words.length > 0)
	console.log("You entered the following words: "+words.join(" "));
else // stop was the first word entered, hence array is empty, display message containing this information
	console.log("No words to display, Stop was the first word entered.");