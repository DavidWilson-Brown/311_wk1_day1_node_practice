// write code for strings.split
  /**
   * Split a string a given delimeter/chosen marker
   * return the new string
   */
const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
}


/** create a function that splits a string into pairs
   * loop through the string, incerment by 2 and return pairs in an array
   * use the slice() method
   */
const pairs = (str) => {
  // write code for strings.pairs
  let pairOfStrings = [];
  for (let i = 0; i < str.length; i += 2) {
    pairOfStrings.push(str.slice(i, i + 2));
  }
  return pairOfStrings;
}


/**
   * return a string in reverse
   * split the string
   * reverse the string
   * then rejoin the string
   */
const reverse = (str) => {
  // write code for strings.reverse
  return str.split('').reverse().join('');
}

module.exports = {
  split,
  pairs,
  reverse
}