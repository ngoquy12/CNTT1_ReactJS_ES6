const total = (first, second, ...rest) => {
  console.log("first: ", first);
  console.log("second: ", second);

  console.log("rest: ", rest);
};

total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
