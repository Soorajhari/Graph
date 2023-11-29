class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class tree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newnode = new node(value);
    if (!this.root) {
      this.root = newnode;
      return;
    }
    let curr = this.root;
    while (true) {
      if (value < curr.value) {
        if (curr.left == null) {
          curr.left = newnode;
          break;
        }
        curr = curr.left;
      } else {
        if (curr.right == null) {
          curr.right = newnode;
          break;
        }

        curr = curr.right;
      }
    }
  }

  contains(value) {
    let curr = this.root;
    while (curr != null) {
      if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.right) {
        curr = curr.right;
      } else {
        return true;
      }
    }
    return false;
  }
  removal(troot, value) {
    if (value < troot.value) {
      troot.left = this.removal(troot.left, value);
    } else if (value > troot.value) {
      troot.right = this.removal(troot.right, value);
    } else {
      if (troot.left == null && troot.right == null) {
        return null;
      } else if (troot.right == null) {
        return troot.left;
      } else if (troot.left == null) {
        return troot.right;
      } else {
        let is = this.inordersuccess(troot.right);
        troot.value = is.value;
        troot.right = this.removal(troot.right, is.value);
      }
    }
    return this.root;
  }
  inordersuccess(root) {
    if (root.left != null) {
      root = root.left;
    }
    return root;
  }
  inorde(root) {
    if (root) {
      this.inorde(root.left);
      console.log(root.value);
      this.inorde(root.right);
    }
  }
  maxvalueleft(root) {
    let curr = root;
    while (curr.left != null) {
      curr = curr.left;
    }
    return curr;
  }
}

let set = new tree();
set.insert(8);
set.insert(3);
set.insert(10);
set.insert(1);
set.insert(6);
set.insert(14);
set.insert(4);
set.insert(7);
set.insert(13);
console.log(set.contains(89));
console.log(set.removal(set.root, 13));

console.log(set.maxvalueleft(set.root));

// console.log(set.inorde(set.root));
