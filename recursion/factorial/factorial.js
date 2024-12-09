
const factorial = (item) => {
    if(item==0){
        return false
    }

    if(item==1){
        return item
    }

    return item * factorial(item-1)
}
console.log(factorial(8), "factorial of 5");
