class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
      this.count = 0;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
        const character = word.charAt(i);
        if (!currentNode.children.has(character)) {
          currentNode.children.set(character, new TrieNode());
        }
        currentNode = currentNode.children.get(character);
        currentNode.count++; // increase the count of words with this prefix
      }
      currentNode.isEndOfWord = true;
    }
  
    countWordsWithPrefix(prefix) {
      let currentNode = this.root;
      for (let i = 0; i < prefix.length; i++) {
        const character = prefix.charAt(i);
        if (!currentNode.children.has(character)) {
          return 0; // prefix not found
        }
        currentNode = currentNode.children.get(character);
      }
      return currentNode.count;
    }
  }
  
  // Example usage:
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("application");
  trie.insert("app");
  trie.insert("banana");
  console.log(trie.countWordsWithPrefix("app")); // 3 (apple, application, app)
  