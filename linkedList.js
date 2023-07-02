class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this._head = head;
  }

  // ADD TO THE LAST QUEUE
  append(value) {
    let node = this._head;
    if (node == null) {
      // SET THE INPUT AS HEAD
      this._head = value;
      return;
    }
    while (node.next) {
      // PUT INPUT AFTER ALREADY EXIST NODE
      node = node.next;
    }
    // SET NEW NODE
    node.next = value;
  }

  // ADD TO THE FIRST QUEUE
  prepend(value) {
    // ORIGIN HEAD
    let node = this._head;
    // REPLACE ORIGIN HEAD WITH NEW HEAD
    this._head = value;
    // PUT ORIGIN HEAD AFTER NEW HEAD
    value.next = node;
  }

  // TOTAL SIZE
  size() {
    let node = this._head;
    let total = 0;
    while (node) {
      node = node.next;
      total++;
    }
    console.log(total);
  }

  // NODE HEAD
  head() {
    return this._head;
  }
  // NODE TAIL
  tail() {
    let node = this._head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  // INDEX
  index(value) {
    let node = this._head;
    let count = 0;
    while (count < value) {
      node = node.next;
      count++;
    }
    return node;
  }

  // PRINT ALL NODES
  toString() {
    let node = this._head;
    let string = '';
    while (node) {
      string += node.value + '=>';
      node = node.next;
    }
    string += 'null';
    console.log(string);
  }
}

let newNode = new LinkedList();
newNode.append(new Node(10));
newNode.append(new Node(15));
newNode.append(new Node(20));
newNode.prepend(new Node(5));
newNode.prepend(new Node(1));

newNode.toString();
console.log(newNode.index(5));
