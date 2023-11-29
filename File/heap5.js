class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;
    while (i > 0) {
      let parentIndex = Math.floor((i - 1) / 2);
      if (this.heap[i] < this.heap[parentIndex]) {
        [this.heap[i], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[i],
        ];
        i = parentIndex;
      } else {
        break;
      }
    }
  }

  delete() {
    if (this.heap.length === 0) {
      return null;
    }
    let deletedValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;
    this.siftDown(i, this.heap.length);
    return deletedValue;
  }

  siftDown(i, n) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < n && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this.siftDown(smallest, n);
    }
  }

  levelOrder() {
    let q = [0];
    let list = "";
    while (q.length) {
      let i = q.shift();
      list += this.heap[i];
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      if (left < this.heap.length) {
        q.push(left);
      }
      if (right < this.heap.length) {
        q.push(right);
      }
    }
    console.log(list);
  }

  kthSmallest(k) {
    let heapCopy = [...this.heap];
    let result = null;
    for (let i = 0; i < k; i++) {      result = heapCopy[0];
      heapCopy[0] = heapCopy.pop();
      this.siftDown(0, heapCopy.length);
    }
    return result;
  }
}
