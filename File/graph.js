class Graph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = new Set();
    }
  }

  addEdges(vertex1, vertex2) {
    if (!this.adjacentList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacentList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacentList[vertex1].add(vertex2);
    this.adjacentList[vertex2].add(vertex1);
  }

  display() {
    for (let vertex in this.adjacentList) {
      console.log(vertex + " -> " + [...this.adjacentList[vertex]]);
    }
  }

  removeEdges(vertex1, vertex2) {
    this.adjacentList[vertex1].delete(vertex2);
    this.adjacentList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      return;
    }

    for (let i of this.adjacentList[vertex]) {
      this.removeEdges(vertex, i);
    }
    delete this.adjacentList[vertex];
  }

  bfs(startingNode) {
    const visited = {};
    const queue = [];
    const result = [];
    visited[startingNode] = true;
    queue.push(startingNode);
    while (queue.length) {
      let curr = queue.shift();
      result.push(curr);
      this.adjacentList[curr].forEach((item) => {
        if (!visited[item]) {
          visited[item] = true;
          queue.push(item);
        }
      });
    }
    return result;
  }

  dfs(startingNode, visited = {}) {
    visited[startingNode] = true;
    console.log(startingNode);
    this.adjacentList[startingNode].forEach((item) => {
      if (!visited[item]) {
        this.dfs(item, visited);
      }
    });
  }

  hasPath(startingNode, targetNode, visited = {}) {
    if (startingNode === targetNode) {
      return true;
    }
    visited[startingNode] = true;
    let foundPath = false;
    this.adjacentList[startingNode].forEach((item) => {
      if (!visited[item]) {
        if (this.hasPath(item, targetNode, visited)) {
          foundPath = true;
          return;
        }
      }
    });
    return foundPath;
  }

  countEdges() {
    let numEdges = 0;
    for (let vertex in this.adjacentList) {
      numEdges += this.adjacentList[vertex].size;
    }
    // Divide by 2 since each edge is counted twice (once for each vertex)
    return numEdges / 2;
  }
}

const h = new Graph();

//Add Vertex

h.addVertex("56");
h.addVertex("65");
h.addVertex("34");
h.addVertex("94");

// Add Edges

h.addEdges("56", "65");
h.addEdges("65", "34");
h.addEdges("34", "56");
h.addEdges("65", "94");

console.log(h.bfs("34"));
// console.log(h.dfs("65"));
h.removeEdges("65", "56");
h.removeVertex("65");

console.log(h.hasPath("56", "34"));
h.display();

// h.addEdges("A", "A")

//Remove Edges

// h.removeEdges("C","B")

//Remove Vertex

// Check has Edges

// console.log(h.hasEdges("A", "B"));
// Display With normal

// // BFS Breadth First Search

// // DFS Depth First Search
// h.dfs("A");

// console.log(h.countEdges());

// h.display();

function bstToArray(root) {
  const arr = [];

  function inorder(node) {
    if (node) {
      inorder(node.left);
      arr.push(node.data);
      inorder(node.right);
    }
  }

  inorder(root);

  return arr;
}

function inorderTraversal(root, res) {
  if (root === null) {
    return;
  }

  inorderTraversal(root.left, res);
  res.push(root.val);
  inorderTraversal(root.right, res);
}

function bstToSortedArray(root) {
  const res = [];
  inorderTraversal(root, res);
  return res;
}
