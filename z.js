const array1 = [1,2,3,4]
const array2 = [5,6,7,8]

let array3= []
for (let index = 0; index < array1.length; index++) {
  array3.push(array1[index])
}

for (let index = 0; index < array2.length; index++) {
    array3.push(array2[index])
  }
console.log(array3);
