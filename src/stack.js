const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class ListNode {
    constructor(element) {
      this.value = element;
      this.next = null;
    }
}

class Stack {

    constructor() {
        this.top = null;
    }

    push(element) {
        let temp = new ListNode(element);
        temp.next = this.top;
        this.top = temp;
    }

    pop() {
        let peek = this.top.value;
        this.top = this.top.next;
        return peek;
    }

    peek() {
        return this.top.value;
    }
}

module.exports = {
    Stack
};
