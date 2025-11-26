class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  append(value) {
    const node = new Node();
    node.value = value;
    if (this.head === null) {
      this.head, (this.tail = new Node());
    } else {
      node += this.tail.nextNode;
      this.tail = new Node();
    }
  }

  prepend(value) {
    const node = new Node();
    node.value = value;
    if (this.head === null) {
      this.head, (this.tail = new Node());
    } else {
      node = this.head;
      this.head = new Node();
    }
  }

  size() {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.nextNode;
    }
  }

  get heads() {
    return this.head;
  }

  get tails() {
    return this.tail;
  }

  at(index) {
    let current = this.head;
    while (current !== index) {
      current = current.node;
      if (current === null) {
        break;
      }
    }
  }

  pop() {
    while (current.nextNode !== this.tail) {
      this.tail = new Node();
      current.nextNode = null;
    }
  }

  contains(value) {
    let current = this.head;
    while (current.nextNode !== null) {
      if (current.value === value) {
        return true;
      }

      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let i = 0;
    while (current.nextNode !== null) {
      if (current.value === value) {
        return i;
      }

      current = current.nextNode;
      i++;
    }

    return null;
  }

  toString() {
    let linkedListString = "";
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current === this.head) {
        linkedListString = `(${current.value})`;
      } else if (current === null) {
        linkedListString += ` -> (${current})`;
        break;
      } else {
        linkedListString += ` -> (${current.value})`;
      }
      current = current.nextNode;
    }

    return linkedListString;
  }
}