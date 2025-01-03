// Definition for a singly linked list node
class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  // Function to calculate the length of a linked list
  function findLength(head) {
    let length = 0;
    let current = head;
  
    // Traverse the linked list
    while (current !== null) {
      length++;
      current = current.next;  // Move to the next node
    }
  
    return length;
  }
  
  // Example usage:
  // Create a linked list 1 -> 2 -> 3 -> 4 -> null
  let node4 = new ListNode(4);
  let node3 = new ListNode(3, node4);
  let node2 = new ListNode(2, node3);
  let node1 = new ListNode(1, node2);
  
  let length = findLength(node1);  // Output: 4
  console.log(length);
  