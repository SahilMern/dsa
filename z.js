const finDublicateInArray = (array) =>{
    let dublicateElemnt= []
    console.log(array, "array");
    for (let index = 0; index < array.length; index++) {
        if(!dublicateElemnt.includes(array[index])){
            dublicateElemnt.push(array[index])
        }else{
            
        }
    }
console.log(dublicateElemnt, "Final");

}
finDublicateInArray([7,9,8,7,9,8,5,3,1,4,1])