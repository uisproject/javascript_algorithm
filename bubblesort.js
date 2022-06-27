// GeeksforGeeks
// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst case time complexity is quite high.

// Time Complexity: O(N2)
// Auxiliary Space: O(1)

// Worst Case Analysis for Bubble Sort
// The worst-case condition for bubble sort occurs when elements of the array are arranged in decreasing order.
// In the worst case, the total number of iterations or passes required to sort a given array is (n-1). where ‘n’ is a number of elements present in the array.

const tests = [[1, 3, 2, 5, 4, 1, 3, 2, 5, 8, 7, 9, 2]];

const solve1 = (arr = []) => {
  const n = arr.length;

  //    the logic behind this algorithm is this will run for n times, you see the example it's 13 times or lap
  //    every a lap it will also run n times or 13 times and check every pair for example

  // lap 1
  //        1, 3, 2, 5, 4, 1, 3, 2, 5, 8, 7, 9, 2
  // 1, 3,        2, 5, 4, 1, 3, 2, 5, 8, 7, 9, 2
  // 1, 2, 3,         5, 4, 1, 3, 2, 5, 8, 7, 9, 2
  // 1, 2, 3, 5,          4, 1, 3, 2, 5, 8, 7, 9, 2
  // 1, 2, 3, 4, 5,           1, 3, 2, 5, 8, 7, 9, 2
  // 1, 2, 3, 4, 1, 5,            3, 2, 5, 8, 7, 9, 2
  // 1, 2, 3, 4, 1, 3, 5,             2, 5, 8, 7, 9, 2
  // 1, 2, 3, 4, 1, 3, 2, 5,              5, 8, 7, 9, 2
  // 1, 2, 3, 4, 1, 3, 2, 5, 5,               8, 7, 9, 2
  // 1, 2, 3, 4, 1, 3, 2, 5, 5, 8                 7, 9, 2
  // 1, 2, 3, 4, 1, 3, 2, 5, 5, 7, 8,                 9, 2
  // 1, 2, 3, 4, 1, 3, 2, 5, 5, 7, 8, 9,                  2
  // 1, 2, 3, 4, 1, 3, 2, 5, 5, 7, 8, 2, 9

  // lap 2 - start over at 0

  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
};
const solve2 = (arr = []) => {
  const n = arr.length;
  let swapped = false;

  // enhanced algorithm from solve1 so if there is nothing to swap so we can end the loop

  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
};

tests.forEach((test) => {
  console.log(solve2(test));
});
