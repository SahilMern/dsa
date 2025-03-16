const array = [1, 2, 3, 5, 6, 8, 9];
let start = 0;
let end = array.length - 1;
let target = 9;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  console.log(mid, "mid");

  if (array[mid] === target) {
    console.log("Target found at index:", mid); // Print index if target is found
    return mid; // Return the index when target is found
  }

  if (array[mid] < target) {
    console.log(start, mid);
    
    console.log("yaha");
    start = mid + 1; // Move to the right half
    console.log(start, "---------------------");
    
  } else {
    console.log("waha");
    end = mid - 1; // Move to the left half
  }
}

console.log("Target not found"); // If the loop finishes, the target wasn't found
return -1; // Return -1 if target is not found
