const insertElement = (array, index, newElem) => {
    if (index < 0 || index > array.length) {
        console.log("Index out of bounds");
        return arr;
    }

    let newArr = new Array(array.length + 1); 
    console.log(newArr);
    
   for (let i = 0; i < index; i++) {
        newArr[i] = array[i];
        newArr[index] = newElem;
    }
}



const array= [11,22,44,33,55];
let index=2;
let newElem = 99;
const data = insertElement(array, index, newElem)