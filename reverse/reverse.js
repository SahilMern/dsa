// const data = [1,2,3,4,5];
//! BUILD IN METHOD
// console.log(data.reverse(), 'data.reverse()');

//! USING RECURSION METHOD
const recursionMethod = (data, start, last) => {
  console.log(data, "data");
  console.log(start, last, start < last, "end");

  if (start < last) {
    let temp = data[start];
    data[start] = data[last];
    data[last] = temp;
    recursionMethod(data, start + 1, last - 1);
  }
};

const data = [1, 2, 3, 4, 5];
recursionMethod(data, 0, data.length - 1);
