const repeatedString = (str) => {
    console.log(str, "str");

    let obj = {};
    let maxVal = 0;
    let maxChar = '';

    // Count frequency of each character and find the max frequency in the same loop
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        obj[char] = (obj[char] || 0) + 1;

        // Update max frequency and character on the fly
        if (obj[char] > maxVal) {
            maxVal = obj[char];
            maxChar = char;
        }
    }

    console.log(`The character with the highest frequency is '${maxChar}' with a count of ${maxVal}.`);
}

repeatedString("aaaaaaaaaaabbabababdhdbsbahvssh");
let numberOfArray1 = [1, 5, 12, 16];
let numberOfArray2 = [1, 5, 12, 16];
let numberOfArray3 = [...numberOfArray1, ...numberOfArray2];
console.log(numberOfArray3, "spread operater");

let conactArray = numberOfArray1.concat(numberOfArray2);
console.log(conactArray, "conactArray");

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
array1.push(...array2);
// console.log(array1); // [1, 2, 3, 4, 5, 6]

Array.prototype.push.apply(array1, array2);

console.log(array1); // [1, 2, 3, 4, 5, 6]
let numberOfArray1 = [1, 5, 12, 16];
let numberOfArray2 = [1, 5, 12, 16];
let numberOfArray3 = [...numberOfArray1, ...numberOfArray2];
console.log(numberOfArray3, "spread operater");

let conactArray = numberOfArray1.concat(numberOfArray2);
console.log(conactArray, "conactArray");

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
array1.push(...array2);
// console.log(array1); // [1, 2, 3, 4, 5, 6]

Array.prototype.push.apply(array1, array2);

console.log(array1); // [1, 2, 3, 4, 5, 6]
