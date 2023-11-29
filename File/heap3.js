class minheap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;
    this.siftup(i);
  }
  siftup(i) {
    let parentindex = Math.floor((i - 1) / 2);
    if (this.heap[i] < this.heap[parentindex]) {
      [this.heap[i], this.heap[parentindex]] = [
        this.heap[parentindex],
        this.heap[i],
      ];
      i = parentindex;
    }
  }
  delete() {
    this.heap[0] = this.heap.pop();
    let i = 0;
    this.siftdown(i, this.heap.length);
  }
  siftdown(i, n) {
    let samllest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && this.heap[left] < this.heap[samllest]) {
      samllest = left;
    }
    if (right < n && this.heap[right] < this.heap[samllest]) {
      samllest = right;
    }
    if (samllest != i) {
      [this.heap[i], this.heap[samllest]] = [this.heap[samllest], this.heap[i]];
      this.siftdown(samllest, n);
    }
  }
  buildheap(arr) {
    this.heap = arr;
    for (let i = Math.floor((arr.length - 1) / 2); i >= 0; i--) {
      this.siftdown(i, arr.length - 1);
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]];
      this.siftdown(0, this.heap.length - 1);
    }
  }
}

const ms = new minheap();
ms.buildheap([10, 15, 18, 20, 23, 27]);
ms.insert(12);
ms.insert(19);
ms.insert(40);
ms.insert(33);
ms.delete();

console.log(ms.heap);
