/** 
 * Checks if the number is even or odd
 * @param {number} num - the number we are checking
 * @returns true if the number is even, or false, if the number is odd
*/
const isEven = (num) => {
  // write code for numbers.isEven
  // Return a boolean based on whether a number is even
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


/**
   * Create a function to return a sum of Numbers
   * Use the reduce() method to find the sum of numbers in an array
   * @param {number} accumulator 
   * @param {number} currentValue 
   * @returns the sum of the array
   */
const sum = (arr) => {
  // write code for numbers.sum
  // Given an array of numbers, return the total sum for that array
  const reduceFunction = (accumulator, currentValue) => accumulator + currentValue;
  return arr.reduce(reduceFunction);

}

/**
   * create a functions that checks if any combination of numbers equals the chosen sum
   * loop through the array twice to get to pull for number combinations
   * if the sum of those combinations equals sum, return true
   * if the sum of those combinations does NOT equal the sum, return false
   */
const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++)
      if((arr[i] + arr[j]) === sum) {
        return true
      } else {
        return false
      }
    }
}

module.exports = {
  isEven,
  sum,
  comboSum
}