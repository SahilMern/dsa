let queue = [];
let currentValue = queue.length;  // This should reflect the length of the queue dynamically
let max = 5;

function enqueue(newVal) {
    if (currentValue >= max) {
        console.log("Queue is full");
    } else {
        queue[currentValue] = newVal;
        currentValue++;
    }
}

function display() {
    console.log(queue, "Queue");
}

function dequeue() {
    if (currentValue === 0) {
        console.log("Queue is empty");
        return;
    }

    // Remove the first element of the queue (shift the elements)
    for (let i = 0; i < currentValue - 1; i++) {
        queue[i] = queue[i + 1];  // Shift each element to the left
    }

    queue.length--;  // Reduce the length of the queue by 1
    currentValue--;  // Update the currentValue
}

// Test the queue
enqueue(20); // Adds 20 to the queue
enqueue(21); // Adds 21 to the queue
enqueue(22); // Adds 22 to the queue
enqueue(23); // Adds 23 to the queue
enqueue(24); // Adds 24 to the queue
enqueue(25); // "Queue is full"

display();  // Displays the current queue

dequeue();  // Removes the first element (20)
display();  // Displays the queue after dequeuing
dequeue();  // Removes the first element (21)
display();  // Displays the queue after dequeuing
