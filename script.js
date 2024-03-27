/*
Exercise 1: maxOfTwoNumbers

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
 console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  /*
Exercise 2: maxOfThree

Define a function, maxOfThree, it should accept three numbers and return the largest among them.

Complete Exercise 2 in the space below:
*/

const maxOfThree = (x,y,z) => {
    if (x >= y && x >= z) {
        return x
        
    } else if (y >= x && y >= z) {
        return y
    } else {
        return z
    }

}

console.log('Exercise 2 Result:', maxOfThree(4, 8, 15) );
// Result is 15 

/*
Exercise 3: Insert at the Beginning

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel, and false otherwise.

Complete Exercise 3 in the space below:
*/

const isCharAVowel = (letter) =>  {
    
    if (letter == "a" || letter == "e" || letter == "i" ||letter == "o" || letter == "u" ){
        return "true";
    } else {
        return "false";
    }
}


console.log('Exercise 3 Result:', isCharAVowel("u"))
// If you put in a vowel it will return true, otherwise it will be false 

/*
Exercise 4: sumArray

Create a function called sumArray. It should take an array of numbers and return the total sum. For example, sumArray([2, 4, 5]) should return 11.

Complete Exercise 4 in the space below:
*/

const sumArray = (group) => {
    let sum = 0;
    for (let i= 0; i < group.length; i++){
          sum += group[i]   // sum = sum + group[i]
        
    }
    return sum 
}


console.log('Exercise 4 Result:', sumArray([2, 4, 5]) );
// returns 11

/*
Exercise 5: multiplyArray

Define a function called multiplyArray. It should take an array of numbers and return the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

Complete Exercise 5 in the space below:
*/
const multiplyArray = (group2) => {
    let mul = 1; // since we are multiplying we can't have the inital mul be 0
    for (let i= 0; i < group2.length; i++){
          mul = mul * group2[i]   // i don't remember if *= works
        
    }
    return mul 
}


console.log('Exercise 5 Result:', multiplyArray([2, 4, 5]));
// returns 40

/*
Exercise 6: reverseString

Define a function called reverseString. It should take a string and return it with its characters in reverse order. For example, reverseString('rockstar'); would return the string "ratskcor".

Complete Exercise 6 in the space below:
*/

const reverseString = (word) => {
    let newWor =""
    for (let i= word.length -1; i >= 0 ; i--){
        newWor += word[i]
    }
    return newWor
}



console.log('Exercise 6 Result:', reverseString('rockstar'));
// returns ratskcor

/*
Exercise 7: longestStringInArray

Define a function called longestStringInArray. It should accept an array of strings and return the length of the longest string in the array.

Complete Exercise 7 in the space below:
*/
const longestStringInArray = (arr) => {
    let len= 0;
    let long = "";
    for (let i= 0; i < arr.length; i++){
        
       
      if (len < arr[i].length ) {

            
            len = arr[i].length 
            long =  arr[i] 
      }

  }
  return long.length

}

console.log('Exercise 7 Result:', longestStringInArray(["word", "bleh", "massive", "big", "huge", "Krzysztof", "General Assambly", "ThisIsTheLastTestForThis"]) );
// "ThisIsTheLastTestForThis" is the longest string and has a length of 24

/*
Exercise 8: stringsLongerThan

Write a function called stringsLongerThan. It takes an array of strings and a number, returning all strings longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) would .

Complete Exercise 8 in the space below:
*/

const stringsLongerThan= (arr2, comp) => {
    let len= 0;
    let long = "";
    let group = [];
    for (let i= 0; i < arr2.length; i++){
        
       
      if (comp  < arr2[i].length ) {


            
         group.push(arr2[i] )
      }

  }
 return group
}

console.log('Exercise 8 Result:', stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) );

// returns ['hello', 'morning']


