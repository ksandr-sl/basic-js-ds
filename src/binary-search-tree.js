const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = null;
        this.rightNode = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.rootNode = null;
    }

    root() {
        return this.rootNode;
    }

    add(data) {
        this.rootNode = addNode(this.rootNode, data);

        function addNode(node, data) {
            if (!node) return new Node(data);
            if (data === node.data) return node;

            if (data < node.data) {
                node.leftNode = addNode(node.leftNode, data);
            }   else {
                node.rightNode = addNode(node.rightNode, data);
            }
            return node;
        }
    }

    has(data) {
        return searchNode(this.rootNode, data);

        function searchNode(node, data) {
            if (!node) return false;
            if (data === node.data) return true;

            return data < node.data ?
            searchNode(node.leftNode, data) :
            searchNode(node.rightNode, data);
        }
    }

    find(data) {
        return findNode(this.rootNode, data);

        function findNode(node, data) {
            if (!node) return null;
            if (data === node.data) return node;

            return data < node.data ?
            findNode(node.leftNode, data) :
            findNode(node.rightNode, data);
        }
    }

    remove(data) {
        this.rootNode = removeNode(this.rootNode, data);

        function removeNode(node, data) {
            if (!node) return null;

            if (data < node.data) {
                node.leftNode = removeNode(node.leftNode, data);
                return node;
            }   else if (data > node.data) {
                node.rightNode = removeNode(node.rightNode, data);
                return node;
            }   else {
                if (!node.leftNode && !node.rightNode) {
                    node = null;
                    return node;
                }

                if (!node.leftNode) {
                    node = node.rightNode;
                    return node;
                }

                if (!node.rightNode) {
                    node = node.leftNode;
                    return node;
                }

                let maxNodeFromLeftNodes = node.leftNode;
                while (maxNodeFromLeftNodes.rightNode) {
                    maxNodeFromLeftNodes = maxNodeFromLeftNodes.rightNode;
                }
                node.data = maxNodeFromLeftNodes.data;
                node.leftNode = removeNode(node.leftNode, maxNodeFromLeftNodes.data);

                return node;
            }
        }
    }

    min() {
        if (!this.rootNode) return null;

        let node = this.rootNode;

        while (node.leftNode) {
            node = node.leftNode;
        }

        return node.data;
    }

    max() {
        if (!this.rootNode) return null;

        let node = this.rootNode;

        while (node.rightNode) {
            node = node.rightNode;
        }

        return node.data;
    }
}

module.exports = {
    BinarySearchTree
};