function twoSum(nums, target) {
    // Iterate through the array with two loops
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // Check if the current pair sums up to the target
            // if (nums[i] + nums[j] === target) {
            //     // Return the indices of the two numbers
            //     return [i, j];
            // }
            console.log(nums[i], nums[j]);
            
        }
    }
    // Return null if no solution found
    return null;
}

// Test the function with a sample input
const nums = [2, 7, 11, 15];
const target = 18;

const result = twoSum(nums, target);

console.log(result);  // Output: [0, 1] because nums[0] + nums[1] = 9
