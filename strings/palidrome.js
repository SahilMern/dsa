const checkPalidrome = (string) => {
    const data = string.split("").reverse().join("") 
    console.log(data);
    
    return data === string
}
checkPalidrome("lilil")

// second method 
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string and check if it equals the original
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello")); // false
