function bubbleSort(arr) {
  if (arr.length === 0) {
    return "Array length is less than Zero";
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
const data = [4, 8, 9, 8, 5, 2];
console.log("Sorted Array:", bubbleSort(data));
