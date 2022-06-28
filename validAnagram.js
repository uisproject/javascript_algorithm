// Given two strings s1 and s2, check if they are anagrams. Two strings are anagrams if they're made of the same characters with the same frequencies
// Example input
// s1 = danger
// s2 = garden
// output : true

const tests = {
  s1: "sss",
  s2: "sss",
};

// my solve
const solve1 = (s1, s2) => {
  // this solving requiring the s1 and s2 to be sorted out and then as array they will be compared for the time complexity i supposed it's O(n^2+n)

  const bubbleSort = (text = "") => {
    const arr = text.split("");
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }

    return arr;
  };

  const nS1 = bubbleSort(s1);
  const nS2 = bubbleSort(s2);

  for (let i = 0; i < nS1.length; i++) {
    if (nS1[i] != nS2[i]) {
      return false;
    }
  }

  return true;
};

// Hash table method
const solve2 = (s1 = "", s2 = "") => {
  // storing the letters into object to store the value of how many of each letter has
  const registerAlphabet = (text = "") => {
    const arr = text.split("");
    let storedAlphabet = {};

    for (let i = 0; i < arr.length; i++) {
      storedAlphabet = {
        ...storedAlphabet,
        ...{
          [arr[i]]:
            storedAlphabet?.[arr[i]] != null ? storedAlphabet?.[arr[i]] + 1 : 1,
        },
      };
    }

    return storedAlphabet;
  };

  const obj1 =
    s1.length > s2.length
      ? registerAlphabet(s1)
      : s1.length === s2.length
      ? registerAlphabet(s1)
      : registerAlphabet(s2);
  const obj2 =
    s1.length < s2.length
      ? registerAlphabet(s1)
      : s1.length === s2.length
      ? registerAlphabet(s2)
      : registerAlphabet(s2);

  for (let i = 0; i < Object.keys(obj1).length; i++) {
    // check if the property exists
    if (!obj1.hasOwnProperty(Object.keys(obj2)[i])) {
      return false;
    }

    for (let j = 0; j < Object.keys(obj1).length; j++) {
      if (Object.keys(obj1)[i] !== Object.keys(obj2)[j]) continue;

      // check if the value of the property is equal
      if (obj1[Object.keys(obj1)[i]] !== obj2[Object.keys(obj2)[j]]) {
        return false;
      }
    }
  }

  return true;
};

// Optimized has table method
const solve3 = (s1 = "", s2 = "") => {
  // the concept still the same as the solve2() but enhanced version with length checking and optimize how to store the letters into object

  if (s1.length != s2.length) return false;

  const storeIntoObj = (text = "") => {
    let result = {};
    for (let i = 0; i < text.length; i++) {
      if (result.hasOwnProperty(text[i])) {
        result[text[i]] += 1;
      } else {
        result = { ...result, [text[i]]: 1 };
      }
    }

    return result;
  };

  const nS1 = storeIntoObj(s1);
  const nS2 = storeIntoObj(s2);

  for (let i = 0; i < Object.keys(nS1).length; i++) {
    if (!nS1.hasOwnProperty(Object.keys(nS2)[i])) {
      return false;
    }

    for (let j = 0; j < Object.keys(nS1).length; j++) {
      if (Object.keys(nS1)[i] !== Object.keys(nS2)[j]) {
        continue;
      }

      if (nS1[Object.keys(nS1)[i]] !== nS2[Object.keys(nS2)[j]]) {
        return false;
      }
    }
  }

  return true;
};

// console.log(solve1(tests.s1, tests.s2));
// console.log(solve2(tests.s1, tests.s2));
console.log(solve3(tests.s1, tests.s2));
