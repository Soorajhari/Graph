class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Binary {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newnode = new Node(value);
    if (!this.root) {
      this.root = newnode;
      return;
    }
    let current = this.root;
    while (true) {
      if (!current.left) {
        current.left = newnode;
        break;
      }
      if (!current.right) {
        current.right = newnode;
        break;
      }
      if (current.left) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }
  remove(value) {
    this.removehelper(value, this.root, null);
  }

  removehelper(value, currentnode, parentnode) {
    while (currentnode) {
      if (value < currentnode.value) {
        parentnode = currentnode;
        currentnode = currentnode.left;
      } else if (value > currentnode.value) {
        parentnode = currentnode;
        currentnode = currentnode.right;
      } else {
        if (currentnode.left && currentnode.right) {
          currentnode.value = this.getMinvalue(currentnode.right);
          this.removehelper(currentnode.value, currentnode.right, currentnode);
        } else {
          if (parentnode == null) {
            if (currentnode.right == null) {
              this.root = currentnode.left;
            } else {
              this.root = currentnode.right;
            }
          } else {
            if (parentnode.left == currentnode) {
              if (currentnode.right == null) {
                parentnode.left = currentnode.left;
              } else {
                parentnode.left = currentnode.right;
              }
            } else {
              if (currentnode.right == null) {
                parentnode.right = currentnode.left;
              } else {
                parentnode.right = currentnode.right;
              }
            }
          }
        }
        break;
      }
    }
  }

  getMinvalue(currentnode) {
    if (currentnode.left === null) {
      return currentnode.value;
    } else {
      return this.getMinvalue(currentnode.left);
    }
  }
  isValidBST(root) {
    let prev = null;

    function inorder(node) {
      if (node === null) {
        return true;
      }

      if (!inorder(node.left)) {
        return false;
      }

      if (prev !== null && prev >= node.val) {
        return false;
      }

      prev = node.val;

      return inorder(node.right);
    }

    return inorder(root);
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode != null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }

    return false;
  }
  preorder(nodes) {
    if (nodes) {
      console.log(nodes.value);
      this.preorder(nodes.left);
      this.preorder(nodes.right);
    }
  }
}
let tree = new Binary();
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(14);
tree.insert(4);
tree.insert(7);
tree.insert(13);

tree.remove(10);
tree.preorder(tree.root);
console.log(tree.isValidBST(tree.root));
console.log(tree.contains(6));

function mirrorBinaryTree(root) {
  if (root === null) {
    return null;
  }

  // Swap the left and right child nodes of the current node
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Recursively mirror the left and right subtrees
  mirrorBinaryTree(root.left);
  mirrorBinaryTree(root.right);

  return root;
}

isValidBST(root);
function isBSTHelper(node, min, max) {
  if (node === null) {
    return true;
  }
  if (node.val <= min || node.val >= max) {
    return false;
  }
  return (
    isBSTHelper(node.left, min, node.val) &&
    isBSTHelper(node.right, node.val, max)
  );
}
return isBSTHelper(root, -Infinity, Infinity);

function bstr(root) {
  let curr = root;
  while (curr.left != null) {
    if (value > curr.left.value) {
    }
  }
}

// Function to find maximum value in left subtree
function findMaxLeft(node) {
  if (node == null) {
    return null; // Base case: empty subtree
  } else if (node.left == null) {
    return null; // Base case: no left subtree
  } else if (node.left.right == null) {
    return node.left.value; // Base case: rightmost node in left subtree
  } else {
    return findMaxLeft(node.left.right); // Recursive case
  }
}

// Definition of a binary search tree node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to find maximum value in left subtree
function findMaxLeft(node) {
  if (node == null) {
    return null; // Base case: empty subtree
  } else if (node.left == null) {
    return null; // Base case: no left subtree
  } else {
    let current = node.left;
    while (current.right != null) {
      current = current.right;
    }
    return current.value; // Found the maximum value in left subtree
  }
}

// Example usage
let root = new Node(5);
root.left = new Node(3);
root.left.left = new Node(1);
root.left.right = new Node(4);
root.right = new Node(8);
root.right.left = new Node(6);
root.right.right = new Node(9);

console.log(findMaxLeft(root)); // Output: 4
