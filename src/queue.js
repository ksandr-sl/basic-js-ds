const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
    constructor(element) {
        this.value = element;
        this.next = null;
    }
}

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    //puts the value at the end of the queue
    enqueue(element) {
        if (!this.head) {
            this.head =  new ListNode(element);
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        if (!current.next) {
            current.next = new ListNode(element);
        }
    }

    // returns the top element from queue and deletes it
    dequeue() {
        let top = this.head.value;
        this.head = this.head.next;

        return top;
    }

    //returns list
    getUnderlyingList() {
        return this.head;
    }
}

module.exports = {
    Queue
};
