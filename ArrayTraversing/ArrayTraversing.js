// TODO:- THIS METHOD I KNOW

const array= [11,22,44,33,55];
//! array traversing using for loop
for(let i=0; i<array.length;i++){
    console.log(array[i]);
}

//! array traversing using for each 
const data = array.forEach((elem) => {
    console.log(elem, "elem");
})

// Array destructuring
let [first, second, third] = array;
console.log(first); 
console.log(second);
console.log(third);

//we get any value by []
