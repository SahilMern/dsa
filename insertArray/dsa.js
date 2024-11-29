//TODO:- pahle function bana hai fhir value pass karna hai ek empty array banan ek value jada leke jitna prvoous wali ki hogi usse use ek jada fhir waha tak loopp chalana jaha tak index diya hai waha tak value set kar dena and i + 1 l=karke uske under value add kar dena 

const insertElement = (array, index, newElem) => {
  if (index < 0 || index > array.length) {
    console.log("Index out of bounds");
    return array;
  }

  let newArr = new Array(array.length + 1);
  console.log(newArr, "newArr");

  for (let i = 0; i < index; i++) {
    newArr[i] = array[i];
  }

  newArr[index] = newElem;
//   console.log(newArr, "newArr");

  for (let i = index; i < array.length; i++) {
    newArr[i + 1] = array[i];
    // console.log(newArr[i + 1]);
    // console.log(array[i], "array[i]");
    
  }
  return newArr;
};

const array = [11, 22, 44, 33, 55];
let index = 2;
let newElem = 99;

const data = insertElement(array, index, newElem);
console.log(data, "data");

