// const array = [['a', 1], ['b', 2], ['c', 3]];
// const obj = Object.fromEntries(array);
// console.log(obj); 
// Output: { a: 1, b: 2, c: 3 }


const array = [3,5,6,5,9]
let data = new Object()
for (let index = 0; index < array.length; index++) {
    // console.log(array[index]);
    data[index] = array[index]

}
console.log(data, "data");
