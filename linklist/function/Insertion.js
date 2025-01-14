function LinkList(value){
    this.value = value;  // Store value
    this.next = null;     // Initialize next as null
}

let head = new LinkList(11);
let mid = new LinkList(22);
let tail = new LinkList(33);

// Linking the nodes
head.next = mid;
mid.next = tail;

let newNode = new LinkList(44);
newNode.next = head;  
head = newNode;      

console.log(head, "head");
