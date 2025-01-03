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
const mergeSortedArrays= (arr1, arr2)=>{
    console.log(arr1, arr2);
    let i=0;
    let j=0;

    while(i<arr1.length && j<arr2.length){
        
    }
}


let arr1 = [11, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
let mergedArray = mergeSortedArrays(arr1, arr2);
