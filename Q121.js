const add = x => y => z => {
    console.log(x, y, z);
    return x + y + z;
  };
  
  add(4)(5)(6);

  //answer A: 4 5 6