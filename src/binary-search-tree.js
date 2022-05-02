const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if(this.rootNode == null) {
      this.rootNode = new Node(data);
      return;
    }

    let currentNode = this.rootNode;

    while(true) {
      if(currentNode.data == data) return;
      else if(data < currentNode.data) {
        if(currentNode.left != null) {
          currentNode = currentNode.left;
          continue;
        }
        currentNode.left = new Node(data);
        return;
      }
      else {
        if(currentNode.right != null) {
          currentNode = currentNode.right;
          continue;
        }
        currentNode.right = new Node(data);
        return;
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;


    while(currentNode != null) {
      if(currentNode.data == data) return true;
      else if(data < currentNode.data) {
        currentNode = currentNode.left;
        continue;
      }
      else {
        currentNode = currentNode.right;
        continue;
      }
    }
    
    return false;
  }

  find(data) {
    let currentNode = this.rootNode;


    while(currentNode != null) {
      if(currentNode.data == data) return currentNode;
      else if(data < currentNode.data) {
        currentNode = currentNode.left;
        continue;
      }
      else {
        currentNode = currentNode.right;
        continue;
      }
    }
    
    return null;
  }

  remove(data) {
    let parentNode;
    let currentNode = this.rootNode;

    while(currentNode != null) {
      if(currentNode.data == data) {
        if(currentNode.left == null && currentNode.right == null) {
          if(currentNode == this.rootNode) this.rootNode = null;
          else if(parentNode.left == currentNode) parentNode.left = null;
          else parentNode.right = null;
        }
        else if(currentNode.left == null) {
          if(currentNode == this.rootNode) this.rootNode = currentNode.right;
          else if(parentNode.left == currentNode) parentNode.left = currentNode.right;
          else parentNode.right = currentNode.right;
        }
        else if(currentNode.right == null) {
          if(currentNode == this.rootNode) this.rootNode = currentNode.left;
          if(parentNode.left == currentNode) parentNode.left = currentNode.left;
          else parentNode.right = currentNode.left;
        }
        else {
          let replaceNodeParent = currentNode;
          let replaceNode = currentNode.right;
          while(replaceNode.left != null) {
            replaceNodeParent = replaceNode;
            replaceNode = replaceNode.left;
          }
          
          currentNode.data = replaceNode.data;
          
          if(replaceNodeParent == currentNode) {
            replaceNodeParent.right = replaceNode.right;
          }
          else {
            replaceNodeParent.left = replaceNode.right;
          }
          
        }
        break;
      }
      else if(data < currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.left;
        continue;
      }
      else {
        parentNode = currentNode;
        currentNode = currentNode.right;
        continue;
      }
    }
  }

  min() {
    if(this.rootNode == null) return null;
    let currentNode = this.rootNode;

    while(currentNode.left != null) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if(this.rootNode == null) return null;
    let currentNode = this.rootNode;

    while(currentNode.right != null) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};