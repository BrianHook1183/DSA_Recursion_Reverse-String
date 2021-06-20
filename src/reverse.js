//TODO In this challenge you will solve a problem using recursion. The objective is to practice using recursion to think about and solve problems. You do not have to worry about the efficiency of your solutions.

/**
 * Returns the string with the characters in reverse order
 * @param {string} text the string to be reversed
 */
function reverse(text) {
  if (text.length < 2) return text;
  return reverse(text.substring(1)) + text.charAt(0);
}

module.exports = reverse;
