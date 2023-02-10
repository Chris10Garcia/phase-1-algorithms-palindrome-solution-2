function isPalindrome(word) {
  // Write your algorithm here

  for (let i =0; i < word.length / 2; i++){
    const j = word.length - 1 - i

    if (word[i] !== word[j]){
      return false
    }
  }

  return true
}

/* 
  tests if word forward is the same as word reversed
  a string is just an array of letters

  l e t t e r s
  0 1 2 3 4 5 6
  i           
            j
    i        
          j
      i
        j

  r a c e c a r
  0 1 2 3 4 5 6
  i           
              j
    i     
            j
      i
          j
        i
        j
  use for (i) iterator and use a j tracker
  you don't need to iterate the entire length of the array, just up to the half point

  so word.length /2

  to get i = 0 and j = 6
  j = word.length -1

  to get j to move along i

  j = word.length - i

*/

/*
  Add written explanation of your solution here
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
