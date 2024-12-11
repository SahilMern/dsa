const array1 =[1,2,3, 4]
const array2 = [5,6,7,8]
const array3 =[]

for (let index = 0; index < array1.length; index++) {
    console.log(array1[index]);
    array3[index] = array1[index]
}
console.log(array3, "array3");

for (let index = 0; index < array2.length; index++) {
    console.log(array2[index]);
    array3[array3.length] = array2[index]
}
console.log(array3, "array3");
