class priority {
  constructor() {
    this.heap = [];
  }
  insert(value, priority) {
    this.heap.push(value, priority);
    let i = this.heap.length - 1;
    this.enque(i);
  }
  enque(i) {
    while (i > 0) {
      let parentIndex = Math.floor((i - 1) / 2);
      if (this.heap[i].priority < this.heap[parentIndex].priority) {
        [this.heap[i], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[i],
        ];
        i = parentIndex;
      } else {
        return;
      }
    }
  }
}
















class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (let i = word.length - 1; i >= 0; i--) {
      let char = word[i];
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char);
    }
    current.isEndOfWord = true;
  }

  isPalindrome(word) {
    let current = this.root;
    let i = 0;
    for (; i < word.length; i++) {
      let char = word[i];
      if (!current.children.has(char)) {
        break;
      }
      current = current.children.get(char);
    }
    if (i === word.length && current.isEndOfWord) {
      return true;
    } else {
      return false;
    }
  }
}

function isPalindrome(word) {
  let trie = new Trie();
  trie.insert(word);
  return trie.isPalindrome(word.split("").reverse().join(""));
}

// Example usage:
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

