class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class bst {
  constructor(value) {
    this.root = new Node(value);
  }

  insert(value) {
    let newnode = new Node(value);
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left == null) {
          current.left = newnode;
          break;
        }
        current = current.left;
      } else {
        if (current.right == null) {
          current.right = newnode;
          break;
        }
        current = current.right;
      }
    }
  }

  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }
  contains(value) {
    let curr = this.root;
    while (curr != null) {
      if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      } else {
        return true;
      }
    }
  }

  removal(troot, value) {
    if (value < troot.value) {
      troot = troot.left;
    } else if (value > troot.value) {
      troot = troot.right;
    } else {
      if (troot.left == null && troot.right == null) {
        return null;
      } else if (troot.left == null) {
        return troot.right;
      } else if (troot.right == null) {
        return left;
      } else {
        let is = this.insuccessor(troot.right);
        troot.value = is.value;
        troot.right = null;
      }
    }
    return this.root;
  }
  insuccessor(root) {
    if (root.left != null) {
      root = root.left;
    }
    return root;
  }
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function sortedArrayToBST(nums) {
  if (nums.length === 0) {
    return null;
  }

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
}

function pathsum(root) {
  if (!root) return 0; // Base case for empty tree

  let sum = 0;
  let queue = [root];

  while (queue.length) {
    let curr = queue.shift();
    sum += curr.value;

    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
  return sum;
}



function lowestCommonAncestor(root, p, q) {
  if (!root) return null; // base case: empty tree
  if (p.val < root.val && q.val < root.val) {
      return lowestCommonAncestor(root.left, p, q); // both nodes are in the left subtree
  } else if (p.val > root.val && q.val > root.val) {
      return lowestCommonAncestor(root.right, p, q); // both nodes are in the right subtree
  } else {
      return root; // the nodes are in different subtrees, so the current node is the LCA
  }
}
