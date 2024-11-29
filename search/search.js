const array = [44, 88 ,99 , 44];

if(array.includes(44)){
    console.log("Present");
}

console.log(array.indexOf(99))

const data = array.find((element) => {
  return  element===88
})
console.log(data, "data"); //output 88

const arr = [1, 2, 3, 4, 5, 3];
const filtered = arr.filter(element => element === 3);
console.log(filtered); 


const someArray = arr.some(element=> element===0)
console.log(someArray, "someArray");
