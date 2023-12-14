class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertFirst(data) {
      this.head = new Node(data, this.head);
    }
  
    reverse() {
      let prev = null;
      let current = this.head;
      let next = null;
  
      while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
  
      this.head = prev;
    }
  
    display() {
      let current = this.head;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  
    findSecondLargest() {
      if (!this.head || !this.head.next) {
        console.log("List has less than two elements.");
        return;
      }
  
      let firstMax = this.head.data;
      let secondMax = Number.MIN_SAFE_INTEGER;
  
      let current = this.head;
  
      while (current !== null) {
        if (current.data > firstMax) {
          secondMax = firstMax;
          firstMax = current.data;
        } else if (current.data > secondMax && current.data < firstMax) {
          secondMax = current.data;
        }
  
        current = current.next;
      }
  
      console.log("Second largest number: " + secondMax);
    }
  }
  
  // Take user input for linked list
  const userInput = [1, 5, 2, 7, 3]; // Replace this with actual user input
  
  const linkedList = new LinkedList();
  
  userInput.forEach((number) => {
    linkedList.insertFirst(number);
  });
  
  linkedList.reverse();
  
  console.log("Reversed Linked List:");
  linkedList.display();
  
  linkedList.findSecondLargest();