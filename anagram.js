const anagram = (str1, str2) => {
    
    if(str1.length !==str2.length){
        return "No anagram"
    }

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(anagram("slient", "listen"));
