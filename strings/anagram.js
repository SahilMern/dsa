//! NOTE:- Proper Way line by line
// Function to check if two strings are anagrams
const checkAnagram = (str1, str2) => {
  // Check if both strings have the same length
  if (str1.length !== str2.length) {
    return false; // If lengths don't match, they can't be anagrams
  }

  // Sort the characters in both strings and join them back to compare
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  // Log the sorted strings for debugging purposes
  console.log(sortedStr1, sortedStr2, "Sorted values");

  // Return true if sorted strings are equal, meaning they are anagrams
  return sortedStr1 === sortedStr2;
};

// Test the function with an example
console.log(checkAnagram("listens", "silent")); // Output: true

// ---------------------------SORTER METHOD---------------------------------------
const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return "No anagram";
  }
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};
console.log(anagram("slient", "listen"));
