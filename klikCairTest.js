// Question

// Given an array of positive and negative integers, denoting different types of parentheses. The
// positive numbers x i  denotes opening parentheses of type x i  and negative number −x i  denotes
// closing parentheses of type x i .
// Open parentheses must be closed by the same type of parentheses. Open parentheses must be
// closed in the correct order, i.e., never close an open pair before its inner pair is closed (if it has an
// inner pair). Thus, [1, 2, −2, −1] is balanced, while [1, 2, −1, −2] is not balanced.
// You have to find out the length of the longest subarray that is balanced.

// Input
// 1 2 -2 -1 3 4 -3

// Output
// 4

// Answer

// I submitted 2 solutions depending on the problem and user input. I also have provided test cases for testing the solutions.

// case 1
// 1. this would work if the number is starting with positive number only, or else it won't work since i am using positive number for checking as initial pointer
// 2. Time complexity for this case is O(n) since it's only iterate through the array once

const solve1 = (arr = []) => {
  let correctPos = 0;
  let pointer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      pointer -= 1;
      if (arr[i] * -1 === arr[pointer]) {
        correctPos += 1;
      }
    } else {
      pointer = i + 1;
    }
  }
  return correctPos * 2;
};

// case 2
// 1. I upgraded the solution to either use positive or negative number as starting array, this will check if the number is positive or negative first then compare until they find the opposite number type, for example if the array is starting with negative number it will run until it finds the positive number then, it will sum for the steps until it finds the opposite number, as the index run forward it will also check the backward for the step it has been counted. when step reach 0 or below it will start checking the next number type again and so on.
// 2. Time complexity for this case is O(n) since it's only iterate through the array once

const solve2 = (arr = []) => {
  const getType = (number) => {
    if (number < 0) return -1;
    return 1;
  };

  let correctPos = 0;
  let step = 0;
  let pointer = 0;
  let currentType = getType(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (getType(arr[i]) === currentType) {
      step += 1;
      pointer = i;
      continue;
    }

    const normalized = arr[i] * -1;

    if (normalized === arr[pointer]) correctPos += 1;
    pointer -= 1;

    if (step <= 0) {
      currentType = getType(arr[i]);
      pointer = i;
      continue;
    }

    step -= 1;
  }

  return correctPos * 2;
};

const testCases = [
  {
    input: [1, 2, -2, -1],
    output: 4,
  },
  {
    input: [0],
    output: 0,
  },
  {
    input: [1, 2, -2, 1],
    output: 2,
  },
  {
    input: [1, 2, -3, -4],
    output: 0,
  },
  {
    input: [-1, -2, -3, -4],
    output: 0,
  },
  {
    input: [-1, -2, -3, 3, 2, 1, 5, 5],
    output: 6,
  },
  {
    input: [1, 2, -2, -1, 3, 4, -3],
    output: 4,
  },
  {
    input: [-1, -2, 2, 1, 3, 4, -3],
    output: 4,
  },
  {
    input: [-1, 1],
    output: 2,
  },
  {
    input: [-1, 1, 2, -2, 3, 4, -3],
    output: 4,
  },
];

testCases.forEach((test) => {
  console.log();
  console.log("Input", test.input);
  console.log("Expected", test.output);
  console.log("Your output", solve2(test.input));
  console.log("Success", solve2(test.input) === test.output);
  console.log("----------------------------------------------------");
});
