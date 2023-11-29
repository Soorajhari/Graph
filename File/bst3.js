class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class binary {
  constructor() {
    this.root = null;
  }
  insert(key) {
    this.root = this.insertvalue(this.root, key);
  }
  insertvalue(root, value) {
    if (root == null) {
      root = new Node(value);
      return root;
    }
    if (root.value > value) {
      root.left = this.insertvalue(root.left, value);
    } else {
      root.right = this.insertvalue(root.right, value);
    }
    return root;
  }

  remove(troot, value) {
    if (troot.value < value) {
      troot.right = this.remove(troot.right, value);
    } else if (troot.value > value) {
      troot.left = this.remove(troot.left, value);
    } else {
      if (troot.left == null && troot.right == null) {
        return null;
      } else if (troot.right == null) {
        return troot.left;
      } else if (troot.left == null) {
        return troot.right;
      } else {
        let Is = this.inordersuccesoor(troot.right);
        troot.data = Is.data;
        troot.right = this.remove(troot.right, Is.data);
      }
    }
    return troot;
  }

  inordersuccesoor(root) {
    while (root.left !== null) {
      root = root.left;
    }
    return root;
  }
  container(value) {
    let current = this.root;
    while (current != null) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  min() {
    return this.minvalue(this.root);
  }
  minvalue(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minvalue(root.left);
    }
  }
  max() {
    return this.maxvalue(this.root);
  }
  maxvalue(root) {
    let curr = root.left;
    while (curr.left !== null) {
      if (curr.left.right) {
        return root.value;
      }
    }
  }
  inorder(root) {
    if (root) {
      this.inorder(root.left);

      this.inorder(root.right);
      console.log(root.value);
    }
  }
  pathsum(root) {
    let q = [root];
    let sum = 0;
    while (q.length) {
      let curr = q.shift();
      sum = sum + curr.value;
      if (curr.left) {
        q.push(curr.left);
      }
      if (curr.right) {
        q.push(curr.right);
      }
    }
    return sum;
  }
  arraytobst(arr) {
    if (!arr.length) {
      return null;
    }

    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);
    let root = new Node(arr[mid]);

    root.left = this.arraytobst(arr.slice(0, mid));
    root.right = this.arraytobst(arr.slice(mid + 1));

    return root;
  }
}

let set = new binary();
set.insert(20);
set.insert(17);
set.insert(22);
set.insert(15);
set.insert(19);
set.insert(21);
set.insert(24);
console.log(set.remove(set.root,22));
console.log(set.container(29));


// console.log(set.min());
// console.log(set.max());
set.inorder(set.root);
// console.log(set.pathsum(set.root));
// console.log(set.arraytobst([1, 2, 3, 4, 5, 6, 7, 8]));

// function maxValueInLeftSubtree(root) {
//   if (!root || !root.left) {
//     return null; // Tree or left subtree is empty
//   }
//   let curr = root.left;
//   while (curr.right) {
//     curr = curr.right;
//   }
//   return curr.value;
// }
