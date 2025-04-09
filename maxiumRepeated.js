const repeatedString = (str) => {
  console.log(str, "str");

  let obj = {};
  let maxVal = 0;
  let maxChar = "";

  // Count frequency of each character and find the max frequency in the same loop
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    obj[char] = (obj[char] || 0) + 1;

    // Update max frequency and character on the fly
    if (obj[char] > maxVal) {
      maxVal = obj[char];
      maxChar = char;
    }
  }

  console.log(
    `The character with the highest frequency is '${maxChar}' with a count of ${maxVal}.`
  );
};

repeatedString("aaaaaaaaaaabbabababdhdbsbahvssh");
