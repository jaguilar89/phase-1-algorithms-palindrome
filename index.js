//Optimized code
function isPalindrome(word) {
  let wordBackwards = word.split('')
                          .reverse()
                          .join('')
                        
  if (wordBackwards === word) {
    return true
  }
  return false                          
}




/* function isPalindrome(word) {
  // Write your algorithm here
  let wordBackwards = [];

  for (let i = word.length - 1; i >= 0; i--) {
    wordBackwards.push(word[i])
  }
  if (wordBackwards.join('') === word) {
    return true
  } else {
    return false
  }
} */



/* 
  Add your pseudocode here:
  0. Initialize a variable  with an empty array, array will hold each letter in the string spelled backwards.
  1. Loop through each letter in the string, backwards.
  2. For each letter in the string, push to the undefined variable and append it to the previous letter until the word is spelled out backwards.
  3. Check if the word, spelled backwards, matches the word spelled forwards.
  4. If words match, return true. Otherwise return false.
*/

/*
  Add written explanation of your solution here:
  No.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

