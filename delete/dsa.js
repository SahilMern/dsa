const numbersArray = [1, 2, 5, 9, 8]; 
let postion = 3;

for(let i=3; i<numbersArray.length;i++){
    console.log(numbersArray[i]);
    numbersArray[i]= numbersArray[i+1]
}

