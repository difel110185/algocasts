// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter((node) => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        let array = [this.root];

        while (array.length > 0) {
            let node = array.shift();

            fn(node);

            array.push(...node.children);
        }
    }

    // traverseBF(fn, node = this.root) {
    //     if (node === this.root)
    //         fn(node);
    //
    //     for (let child of node.children)
    //         fn(child);
    //
    //     for (let child of node.children)
    //         this.traverseBF(fn, child);
    // }

    traverseDF(fn) {
        let array = [this.root];

        while (array.length > 0) {
            let node = array.shift();

            fn(node);

            array.unshift(...node.children);
        }
    }

    // traverseDF(fn, node = this.root) {
    //     fn(node);
    //
    //     for (let child of node.children)
    //         this.traverseDF(fn, child);
    // }
}

module.exports = { Tree, Node };
