/**
 * 
1️⃣ Bubble Sort
Idea: Repeatedly swap adjacent elements if they are in the wrong order.

Complexity: O(n²) worst/avg, O(n) best (already sorted).

Stable: ✅ Yes.
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

/**
 * 
2️⃣ Selection Sort
Idea: Find the smallest element and place it at the start, repeat for remaining.

Complexity: O(n²) always.

Stable: ❌ No (by default).

 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

/**
 * 
3️⃣ Insertion Sort
Idea: Build sorted array one item at a time by inserting into correct position.

Complexity: O(n²) worst, O(n) best (nearly sorted).

Stable: ✅ Yes.
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i], j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

/**
 * 
4️⃣ Merge Sort
Idea: Divide array into halves, sort each half, then merge them.

Complexity: O(n log n) always.

Stable: ✅ Yes.
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }
  return [...result, ...left, ...right];
}

/**
 * 
5️⃣ Quick Sort
Idea: Pick a pivot, partition array into less/greater than pivot, recursively sort.

Complexity: O(n log n) avg, O(n²) worst (bad pivot).

Stable: ❌ No.
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [], right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    (arr[i] < pivot ? left : right).push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

/**
 * 6️⃣ Heap Sort
Idea: Use a binary heap to repeatedly extract max/min.

Complexity: O(n log n) always.

Stable: ❌ No.
 */