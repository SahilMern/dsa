// Write a function to count the frequency of characters in a string.

const countChar = (string) => {
  console.log(string, "string");

  let obj = {};
  for (const element of string) {
    // obj[char] = (obj[char] || 0) + 1;
    obj[element] = (obj[element] || 0) + 1;
  }
  console.log(obj);
  let maxChar = '';

  const maxCount = Object.keys(obj).filter((element) => {
    console.log(obj[element], "element");
    return obj[element]
    
  })

//   for(obj[key]<maxChar){

//   }

};
countChar("hayabda");
