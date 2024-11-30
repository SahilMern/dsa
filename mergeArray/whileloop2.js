let data1 = [3, 4, 9, 7, 8, 11, 11,1];
let data2 = [7, 8, 9, 10];
let data3 = [];

let d1 = 0;
let d2 = 0;
let d3 = 0;

while (d1 < data1.length && d2 < data2.length) {
    if (data1[d1] < data2[d2]) {
        console.log(data1[d1], data2[d2], data3[d3], "-");
        data3[d3] = data1[d1];
        d1++;
    } else {
        console.log(data3[d3], data1[d2], "----");
        data3[d3] = data2[d2];
        d2++;
    }
    d3++;
}

// Add remaining elements from data1, if any
while (d1 < data1.length) {
    data3[d3] = data1[d1];
    d1++;
    d3++;
}

// Add remaining elements from data2, if any
while (d2 < data2.length) {
    data3[d3] = data2[d2];
    d2++;
    d3++;
}

console.log("Merged Array:", data3);
