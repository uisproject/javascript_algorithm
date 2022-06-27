const questionOne = () => {
  // sum up all the number in linear example:
  // given n = 5 so it will be 1+2+3+4+5

  const n = 10;

  const solve = (n) => {
    let result = 0;
    for (let i = 0; i < n; i++) {
      result += i;
    }

    return result;
  };

  console.log(solve(n));
};

const questionTwo = () => {
  // there is a light switch and every iteration n would be checked if n can be divided, if not turn the switch
  const n = 5;

  const solve = (n) => {
    let isSwitched = false;

    for (let i = 1; i <= n; i++) {
      if (i % 2 == 0) {
        isSwitched = !isSwitched;
      }
    }

    return isSwitched;
  };

  console.log(solve(n));
};

questionOne();
questionTwo();
