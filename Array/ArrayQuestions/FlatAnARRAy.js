// const array = [1,3,8,[9,[5],6]]
// console.log(array.flat(Infinity));

function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

// Example usage:
console.log(flattenArray([1, [2, [3, [4, 5]], 6]]));
// Output: [1, 2, 3, 4, 5, 6]
