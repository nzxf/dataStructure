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
    if (node === null) {
      // SET THE INPUT AS HEAD
      this._head = new Node(value);
      return;
    }
    while (node.next) {
      // PUT INPUT AFTER ALREADY EXIST NODE
      node = node.next;
    }
    // SET NEW NODE
    node.next = new Node(value);
  }

  // ADD TO THE FIRST QUEUE
  prepend(value) {
    // ORIGIN HEAD
    let node = this._head;
    // REPLACE ORIGIN HEAD WITH NEW HEAD
    this._head = new Node(value);
    // PUT ORIGIN HEAD AFTER NEW HEAD
    this._head.next = node;
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

  // REMOVE LAST ELEMENT
  pop() {
    let node = this._head;
    let prev = '';
    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }

  // CONTAIN
  contains(value) {
    let node = this._head;
    while (node) {
      if (node.value == value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  // FIND
  find(value) {
    let node = this._head;
    let index = 0;
    while (node) {
      if (node.value === value) {
        return index;
      }
      node = node.next;
      index++;
    }
    return null;
  }

  // INSERT
  insertAt(value, index) {
    let node = this._head;
    // HEAD
    if (index === 0) {
      this._head = new Node(value);
      return this._head.next = node;
    }
    // BODY
    let count = 0;
    let prev = 'none';
    while (node) {
      if (count === index) {
        let newInput = new Node(value);
        prev.next = newInput;
        return (newInput.next = node);
      }
      prev = node;
      node = node.next;
      count++;
    }
    // TAIL (OR OVER)
    let newInput = new Node(value);
    prev.next = newInput;
    return (newInput.next = null);
  }

  // REMOVE
  remove(index) {
    let node = this._head;
    // HEAD
    if (index === 0){
      return this._head = node.next
    }
    // BODY & TAIL
    let count = 0;
    let prev = '';
    while (node) {
      if (count === index) {
        return prev.next = node.next;
      }
      prev = node;
      node = node.next;
      count++;
    }
  }

  // PRINT ALL NODES
  toString() {
    let node = this._head;
    let string = '';
    while (node) {
      string += `(${node.value})` + ' -> ';
      node = node.next;
    }
    string += ' null';
    console.log(string);
  }
}

let myLists = new LinkedList();
myLists.append(10);
myLists.append(15);
myLists.append(20);
myLists.prepend(5);
myLists.prepend(1);

myLists.toString();
myLists.remove(0);
myLists.toString();
