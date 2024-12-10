// stake/Push/push.js
const data = [];
let max=5 
let lastValue = data.length;
const push = (value) => {
    if (lastValue>=max) {
        console.log("Stake is full");
    }else{
        data[lastValue] = value;
        lastValue++;
        console.log(data);

    }
}

push(20)
push(20)
push(20)
push(20)
push(20)
push(20)

