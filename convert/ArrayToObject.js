const array = [1, 2, 3, 4, 5, 6];

//! ARRAY TO OBEJCT
//?My method ----------START-----------------
// let obj = {};
// for (let i = 0; i < array.length; i++) {
//     obj[i] = array[i]
// }
// console.log(obj, "obj");
//?My method -----------STOP----------------

//! Array to Array of Obejct
//?My method 2-----------START----------------
const data = array.map((elem, index) => {
  return { index, element: elem }; // Use the index instead of elem
});
console.log(data, "data");
//?My method 2-----------STOP----------------
