// Longest Substring Without Repeating Characters
let strObj = {};
const lengthOfLongestSubstring = (String) => {
  const data = String.split("");
  console.log(data, "data");

  for (const char of data) {
    strObj[char] = (strObj[char] || 0) + 1;
  }

  console.log(strObj);
  
};
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
