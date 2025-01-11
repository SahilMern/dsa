class List{
    constructor(data) {
        this.head = {
          value: data,
          next: null, 
        };
        this.tail = this.head;
        this.size = 1;
      }

      append(nodeData){
        let newNode = {
            value: nodeData,
            next: null, // The next of the new node will be null
          };
          this.tail.next = newNode;
          this.tail = newNode;
           this.size++;
      }
}

const list = new List(200);
list.append(20)
console.log(list);
