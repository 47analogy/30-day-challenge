class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // add data to end of a linked list
  push(value) {
    // create reference to Node
    const newNode = new Node(value);

    // if list is empty, point both head and tail to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // if list is not empty, point tail to new node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this; // return the list
  }
}
