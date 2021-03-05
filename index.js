let resultArray = [];

const findEven = (num) => {
  for (let num = 0; num < 50; num++) {
    if (num % 2 === 0) {
        resultArray.push(num)
      }
    }
  return resultArray
}

findEven();