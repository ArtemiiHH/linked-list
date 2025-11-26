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
      this.head = node;
      this.tail = node;
    } else {
      this.tail.nextNode = node;
      this.tail = node;
    }
  }

  prepend(value) {
    const node = new Node();
    node.value = value;
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }
  }

  size() {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.nextNode;
    }

    return count;
  }

  get heads() {
    return this.head;
  }

  get tails() {
    return this.tail;
  }

  at(index) {
    let current = this.head;
    let i = 0;
    while (current !== null && i < index) {
      current = current.nextNode;
      i++;
    }

    if (current === null) {
      return null;
    } else if (i === index) {
      return current;
    }
  }

  pop() {
    let current = this.head;
    if (current === null) {
      return;
    } else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      while (current.nextNode !== this.tail) {
        current = current.nextNode;
      }
      this.tail = current;
      current.nextNode = null;
    }
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
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
    while (current !== null) {
      if (current.value === value) {
        return i;
      }
      current = current.nextNode;
      i++;
    }
    return null;
  }

  toString() {
    let str = "";
    let current = this.head;
    while (current !== null) {
      str += `(${current.value}) -> `;
      current = current.nextNode;
    }

    str += 'null';
    return str;
  }
}
