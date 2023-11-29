class Node {
  constructor() {
    this.children = new Map();
    this.isWordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  addElement(str) {
    let curr = this.root;
    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      if (!curr.children.has(ch)) {
        curr.children.set(ch, new Node());
      }
      curr = curr.children.get(ch);
    }
    curr.isWordEnd = true;
  }

  contains(str) {
    let curr = this.root;
    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      if (!curr.children.has(ch)) {
        return false;
      }
      curr = curr.children.get(ch);
    }
    dEnd;
  }

  traversal() {
    const words = [];
    this.traversalHelper(words, "", this.root);
    return words;
  }

  traversalHelper(words, word, curr) {
    if (curr.isWordEnd) {
      words.push(word);
    }
    for (const [ch, node] of curr.children.entries()) {
      this.traversalHelper(words, word + ch, node);
    }
  }

  populateSuffixtries(str) {
    for (let i = 0; i < str.length; i++) {
      this.insertElementsToSuffixttrie(str, i);
    }
  }

  insertElementsToSuffixttrie(str, idx) {
    let curr = this.root;
    for (let i = idx; i < str.length; i++) {
      const ch = str[i];
      if (!curr.children.has(ch)) {
        curr.children.set(ch, new Node());
      }
      curr = curr.children.get(ch);
    }
    curr.isWordEnd = true;
  }

  deletion(str) {
    let curr = this.root;
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      if (!curr.children.has(ch)) {
        return;
      }
      stack.push(curr);
      curr = curr.children.get(ch);
    }
    curr.isWordEnd = false;

    while (
      stack.length > 0 &&
      !this.root.isWordEnd &&
      curr.children.size === 0
    ) {
      const prev = stack.pop();
      curr = prev.children.get(str[stack.length]);
      prev.children.delete(str[stack.length]);
    }
  }

  deletion(str) {
    let curr = this.root;
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      let ch = str[i];
      if (!curr.children.has(ch)) {
        return;
      }
      stack.push(curr);
      curr = curr.children.get(ch);
    }
    curr.isWordEnd = false;
    while (
      stack.length > 0 &&
      !this.root.istrueword &&
      curr.children.size == 0
    ) {
      let prev = stack.pop();
      curr = prev.children.get(str[stack.length]);
      prev.children.delete(str[stack.length]);
    }
  }
}

const obj = new Trie();
obj.addElement("helloworld");
obj.addElement("hell");
obj.addElement("hello");
obj.addElement("happy");
obj.addElement("banana");
// console.log(obj.contains("hello"));
// console.log(obj.traversal());
// console.log(obj.root);
obj.populateSuffixtries("banana");
obj.populateSuffixtries("hello");
obj.populateSuffixtries("helloworld");
console.log(obj.traversal());
obj.deletion("hello");
console.log(obj.traversal());

return curr.isWor;
