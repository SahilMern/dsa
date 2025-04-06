let myMap = new Map();
myMap.set("name", "Alice");
myMap.set(1, "one");
myMap.set(true, "boolean value");

console.log(myMap); // Map { 'name' => 'Alice', 1 => 'one', true => 'boolean value' }
console.log(myMap.size); // 3
console.log(myMap.has("name")); // true
console.log(myMap.has(1)); // true

console.log(myMap.get("name")); // Alice
console.log(myMap.get(1)); // one

myMap.delete(1);
console.log(myMap); // Map { 'name' => 'Alice', true => 'boolean value' }

myMap.clear();
console.log(myMap, "myMap final"); // Map {} myMap final
