class MaxHeap {
  constructor() {
    this.storage = [];
  }

  insert(value) {
    this.storage.push(value);
    let i = this.storage.length - 1;
    while (i > 0) {
      let parentindex = Math.floor((i - 1) / 2);
      if (this.storage[i] > this.storage[parentindex]) {
        [this.storage[i], this.storage[parentindex]] = [
          this.storage[parentindex],
          this.storage[i],
        ];
        i = parentindex;
      } else {
        return;
      }
    }
  }
  buildHeap(arr) {
    this.storage = arr;
    for (let i = Math.floor((arr.length - 1) / 2); i >= 0; i--) {
      this.heapify(i, arr.length - 1);
    }
    //heapsort
    for (let i = arr.length - 1; i > 0; i--) {
      [this.storage[0], this.storage[i]] = [this.storage[i], this.storage[0]];
      this.heapify(0, i);
    }
  }
  heapify(i, n) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left > n && this.storage[left] > this.storage[smallest]) {
      smallest = left;
    }

    if (right > n && this.storage[right] > this.storage[smallest]) {
      smallest = right;
    }

    if (smallest != i) {
      [this.storage[i], this.storage[smallest]] = [
        this.storage[smallest],
        this.storage[i],
      ];
      this.heapify(smallest, n);
    }
  }
}

const set = new MaxHeap();

// set.insert(1);
set.buildHeap([9, 8, 6, 5, 2, 1]);
set.insert(3);
set.insert(7);
set.insert(4);
set.insert(8);
set.insert(10);

console.log(set.storage);
