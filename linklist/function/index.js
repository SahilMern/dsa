function Node(value){
    this.head=value
    this.next= null
}


const head = new Node(20)
const mid = new Node(20)
const tail = new Node(90)


head.next = mid
mid.next = tail
console.log(head, "head");

