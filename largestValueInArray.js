const array = [44, 55, 66, 88, 200];
const data = Math.max(...array);
// console.log(data, "Data");

let largetNumber = array[0];
for (let i = 0; i < array.length; i++) {
  if (array[i] > largetNumber) {
    largetNumber = array[i];
  }
}
// console.log(largetNumber, "largetNumber");
