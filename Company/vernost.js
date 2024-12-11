const array = [1,2,2,3,4,5,4];
let removeDuplicate = [];
for (let i = 0; i < array.length; i++) {
    if (!removeDuplicate.includes(array[i])) {
        removeDuplicate.push(array[i]);
    }
}
console.log(removeDuplicate);

console.log(new Set([...array]));
