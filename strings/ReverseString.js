// Reverse a string
let revserString = ""
const reverseString = (string) => {
    console.log(string, "string");
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        // console.log(element);
        revserString=element +revserString
    }
}
const string= "sahilyadav";
reverseString(string)
console.log(revserString, "revserString");
