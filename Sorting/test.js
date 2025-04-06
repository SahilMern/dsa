const array = [0, 1, 15, 1, 155, 88, 1, 0];

for (let i = 0; i < array.length; i++) {
  let current = array[i];
  let j = i - 1;
  console.log(j);
  while (j >= 0 && arr[j] > current) {
    array[j + 1] = arr[j];
    j--;
  }
}

console.log(array); // This will print the sorted array
