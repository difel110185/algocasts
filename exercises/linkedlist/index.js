// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, node = null) {
        this.data = data;
        this.next = node;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.insertAt(data, 0);
    }

    size() {
        let node = this.head;

        let size = 0;

        while (node) {
            size++;
            node = node.next;
        }

        return size;
    }

    getFirst() {
        return this.getAt(0);
    }

    getLast() {
        return this.getAt(this.size()-1)
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.removeAt(0);
    }

    removeLast() {
        this.removeAt(this.size()-1)
    }

    insertLast(data) {
        const node = new Node(data);
        if (this.size() === 0)
            this.head = node;
        else
            this.getLast().next = node;
    }

    getAt(index) {
        let node = this.head;

        if (this.size() < index-1)
            return null;

        for (let i = 0; i<index; i++)
            node = node.next;

        return node;
    }

    removeAt(index) {
        if (this.size() > 0 && this.size() > index) {
            if (index === 0)
                this.head = this.head.next;
            else {
                let previous = this.head;
                let current = previous.next;
                let next = current.next;

                for (let i = 1; i<index; i++) {
                    previous = current;
                    current = next;
                    next = next.next;
                }

                previous.next = next;
            }
        }
    }

    insertAt(data, index) {
        if (this.size() >= index) {
            let node = new Node(data);
            if (index === 0)
                this.head = new Node(data, this.head);
            else {
                let previous = this.head;
                let current = previous.next;

                for (let i = 1; i<index; i++) {
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                previous.next = node;
            }
        }
        else
            this.insertLast(data);
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while(node) {
            fn(node, counter);
            node = node.next;
            counter++;
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
