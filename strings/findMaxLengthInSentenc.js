const findLargestWordUsingReduce = (inputString) => {
  const words = inputString.split(" ");

  const largestWord = words.reduce((accumulator, currentWord) => {
    return accumulator.length >= currentWord.length ? accumulator : currentWord;
  });

  console.log("The largest word using reduce is:", largestWord);
};
