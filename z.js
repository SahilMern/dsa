const insertInArray = (array, index, value) => {
  let newArray = new Array(array.length + 1);
  for (let i = 0; i < index; i++) {
    newArray[i] = array[i];
  }

  newArray[index] = value;
  for (let i = index; i < array.length; i++) {
    newArray[i+1] = array[i];
  }

  console.log(newArray, "newArray");
  
};

const array = [1, 2, 3, 4, 5];
let index = 3;
let value = 6;
insertInArray(array, index, value);
