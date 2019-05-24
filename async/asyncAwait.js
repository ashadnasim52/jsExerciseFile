const add = (a, b) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      if (a < 1 || b < 1) {
        reject("positive number only allowed");
      }
      let sum = a + b;
      reslove(sum);
    }, 2000);
  });
};

//async/await
const doWork = async () => {
  let sum1 = await add(1, 2);
  let sum2 = await add(sum1, 5);
  return sum2;
};

doWork()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    throw err;
  });
