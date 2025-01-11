// class List{
//     constructor(data) {
//         this.head = {
//           value: data,
//           next: null,
//         };
//         this.tail = this.head;
//         this.size = 1;
//       }

//       append(nodeData){
//         let newNode = {
//             value: nodeData,
//             next: null, // The next of the new node will be null
//           };
//           this.tail.next = newNode;
//           this.tail = newNode;
//            this.size++;
//       }
// }

// const list = new List(200);
// list.append(20)
// list.append(900)
// list.append(150)
// list.append(30)

// console.log(list);

class Link {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

  append(value) {
    let newNode  = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;  // Point the current tail to the new node
    this.tail = newNode;  // Update the tail to the new node
    this.size++;  // Increment size
  }
}

const linkList = new Link(10);
linkList.append(22);
console.log(linkList, "linkList");

