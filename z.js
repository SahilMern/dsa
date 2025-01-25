const findToSum  =(array, target) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            // if(array[i] ===array)
            // console.log(array[i] + array[j] ===target);
            if(array[i] + array[j] ===target){
                return [array[i], array[j]]
            }
            
        }        
    }
}

const nums = [2, 7, 11, 15];
const target = 18;

console.log(findToSum(nums, target));
