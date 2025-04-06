const array = [44, 55, 66, 66, 88, 88, 200];
let withoutDublicate = [];
let dublicateElementAre = [];
for (let i = 0; i < array.length; i++) {
  if (!withoutDublicate.includes(array[i])) {
    withoutDublicate.push(array[i]);
  } else {
    dublicateElementAre.push(array[i]);
  }
}

console.log(withoutDublicate, "Single element are...");
console.log(dublicateElementAre, "Dublicate Element are ...");

//!Note:-  Second Method best Method
const removeDublicateUsingSet = new Set([...array]);
console.log(removeDublicateUsingSet, typeof removeDublicateUsingSet); //!Type Object print

//? If you want to print in array then use your mind first then see solution

const data = Array.from(removeDublicateUsingSet);
console.log(data, "data");
