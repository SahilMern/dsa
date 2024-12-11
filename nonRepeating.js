function firstUniqChar(str) {
  console.log(str, "sa");
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  console.log(freq, "freq");

  //!AGAR DATA ARRAY MAI CHAHIYE TO 
  let data = Object.keys(freq).filter((key) => {
    return freq[key] === 1;
  });
  console.log(data, "data");

  //!AGAR DATA SINGLE MAI CHAHIYE TO 
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }
  return -1;
}

console.log(firstUniqChar("leetcode"), "firstUniqChar");
