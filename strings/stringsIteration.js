let string = "sahilyadav";

//? Using for loop (if you need the index)
for (let i = 0; i < string.length; i++) {
  const element = string[i];
  // console.log(element);
}

//? Using for-of loop (simpler for direct value iteration)
for (let value of string) {
  console.log(value, "value");
}

//!NOTE:- We can do this thing using map reduce and forEach method but first we need to covert array.
