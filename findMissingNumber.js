const findMissingNumber = (array) => {
    let n = array.length + 1;
    
    let total = (n * (n + 1)) / 2;
    console.log(total);
    let sum = array.reduce((acc, num) => acc + num, 0);
    return total - sum;
    
}
console.log(findMissingNumber([7,8,9,11]));
