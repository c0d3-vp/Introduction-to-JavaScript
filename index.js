/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
console.log(':::Task 1 - A:::');
let votingAge = 21;

console.log(votingAge > 18);
 
console.log('-----');

// function votingAgeFunc(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(votingAgeFunc(37));
// console.log(votingAgeFunc(16));


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
console.log(':::Task 1 - B:::');
let x = 1;
let y = 2;

if (x < 3) {
  x = y;
}
console.log(`X used to be 1. X now equals to ${x}.`);
console.log('-----');
//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
console.log(':::Task 1 - C:::');
let string = '1999';

Number(string);

console.log(`String '1999' is now number ${string}.`);
console.log('-----');
//Task d: Write a function to multiply a*b 


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
console.log(':::Task 2:::');
function ageInDogYears(age) {
  return age * 7;
}

console.log(ageInDogYears(14));
console.log('-----');
/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
console.log(':::Task 3:::');  
function dogFeeder(weight, age) {
  if (age >= 1) {
    if (weight <= 5) {
      return weight * .05;
    } else if (weight >= 6 && weight <= 10) {
      return weight * .04; 
    } else if (weight >= 11 && weight <= 15)
      return weight * .03;
    } else if (weight > 15) {
      return weight * .02;
    }
  else {
    if (age >= (2 / 12) && age <= (4 / 12)) {
      return weight * .10;
    } else if (age > (4 / 12) && age <= (7 / 12)) {
      return weight * .05;
    } else if (age > (7 / 12) && age <= (12 / 12)) {
      return weight * .04;
    }
  }
}

console.log(dogFeeder(15, 1));
console.log('-----');
/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
console.log(':::Task 4:::');
function rockPaperScissors (userChoice) {
  let computer = ['rock', 'paper', 'scissors'];
  let computerChoice = computer[Math.floor(Math.random() * 3)]
  console.log(computerChoice);
  if (computerChoice === userChoice) {
    return 'tie';
  }

  if (computerChoice === 'rock') {
    if (userChoice === 'scissors') {
      return 'computer wins'
    }
    return 'user wins';
  }

  if (computerChoice === 'paper') {
    if (userChoice === 'scissors') {
      return 'user wins' 
    }
    return 'computer wins';
  }

  if (computerChoice === 'scissors') {
    if (userChoice === 'rock') {
      return 'user wins'
    }
    return 'computer wins';
  }
}

console.log(rockPaperScissors());
console.log('-----');
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
console.log(':::Task 5 - A:::');
function metricConverter(kilometers) {
let miles = 0.621371;
let result = kilometers * miles

return result;
}

console.log(metricConverter(13));

console.log('-----');
//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
console.log(':::Task 5 - B:::'); 
function metricConverter2(feet) {
let centimeters = 30.48;
let result = feet * centimeters

return result;
}

console.log(metricConverter2(30));

console.log('-----');
/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
console.log(':::Task 6:::');
function annoyingSong(num) {
  let i = num;
  let thing = 'bottles';

  for (i; i > 0; i--) {
    if (i === 1) {
      thing = 'bottle';
    }

    let line1 = `${i} ${thing} of soda on the wall, ${i} ${thing} of soda.`;
    let line2 = `Take one down, pass it around, ${i - 1} bottles soda on the wall`;

    if ((i - 1) === 1) {
      line2 = line2.replace('bottles', 'bottle');
    }

    console.log(`${line1}\n${line2}\n`);
  } 
}
console.log(annoyingSong(99));
console.log('-----');
/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corresponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
console.log(':::Task 7:::');
function gradeCalculator (num) {
  if (num >= 90) {
    return "A";
  } else if (num >=80) {
    return "B";
  } else if (num >= 70) {
    return "C";
  } else if (num >= 60) {
    return "D";
  } else {
    return "F";
  }
};
console.log(gradeCalculator(99));
console.log(gradeCalculator(90));
console.log(gradeCalculator(89));
console.log(gradeCalculator(80));
console.log(gradeCalculator(79));
console.log(gradeCalculator(69));
console.log(gradeCalculator(59));
console.log(gradeCalculator(33));
console.log('-----');
/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
console.log('***Stretch 1***');

function numberOfVowels(str) {
  let vowelList = 'aeiouAEIOU';
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowelList.indexOf(str[i]) !== -1) {
      result += 1;
    }
  }
  return result;
}

console.log(numberOfVowels('Hello, My name is Pooh.  I have a brother named Nitro and a sister named Maxxine. Together we form a band of mistifs called The Trihuahuas'));

console.log('-----');
/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
//console.log('***Stretch 2***');