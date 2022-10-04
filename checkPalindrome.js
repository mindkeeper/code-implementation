const checkPalindrome = (str) => {
  if (!str || typeof str !== "string") return "Invalid Input";
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  if (revStr !== str) return `${str} bukan kata palindrome`;
  return `${str} adalah kata palindrome`;
};

console.log(checkPalindrome("katak"));
console.log(checkPalindrome("semut"));
