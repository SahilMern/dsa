function findAllOccurrences(arr, target) {
  let indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indices.push(i);
    }
  }
//   console.log(indices, "indices");
return indices.length>0 ? indices : "No value found";
}

const arr = [1, 2, 3, 3, 4, 5, 3];
const target = 3;
const indices = findAllOccurrences(arr, target);
console.log(indices); // Output: [2, 3, 6] (indices of 3)
