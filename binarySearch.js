// Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).

const solve1 = (arr, l, r, x) => {
  if (r >= 1) {
    try {
      let mid = l + Math.floor((r - l) / 2);

      if (arr[mid] == x) return true;

      if (arr[mid] > x) return solve1(arr, l, mid - 1, x);

      return solve1(arr, mid + 1, r, x);
    } catch (e) {
      return false;
    }
  }
};

const target = 15;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n = arr.length;
console.log(solve1(arr, 0, n - 1, target));
