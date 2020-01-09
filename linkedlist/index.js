// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

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
  size() {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }
  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
    return this.head;
  }
  removeLast() {
    let node = this.head;
    if (!node || !node.next) {
      this.head = null;
      return this.head;
    }

    while (node) {
      let next = node.next;
      if (!next) {
        return;
      } else if (!next.next) {
        node.next = null;
      }
      node = next;
    }
    return node;
  }
  insertLast(data) {
    let lastNode = this.getLast();
    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let node = this.head;
    let count = 0;
    while (node) {
      if (count === index) {
        return node;
      }
      count++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    // let node = this.head;
    // let count = 0;
    // let prevNode = null;
    // while (node) {
    //   if (count === index) {
    //     if (prevNode) {
    //       prevNode.next = node.next;
    //     } else {
    //       this.head = node.next;
    //     }
    //   }
    //   count++;
    //   prevNode = node;
    //   node = node.next;
    // }
    if (index === 0) {
      this.head = this.head ? this.head.next : null;
      return;
    }
    let node = this.getAt(index - 1);
    if (node && node.next) {
      node.next = node.next.next;
    }
  }
  insertAt(data, index) {
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    let node = this.getAt(index - 1) || this.getLast();
    node.next = new Node(data, node.next);
  }
  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
