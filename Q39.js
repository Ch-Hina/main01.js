[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );


  //Answer C: [1, 2, 0, 1, 2, 3]
  