function sayHi() {
    return (() => 0)();
  }
  
  console.log(typeof sayHi());

  //answer B: "number"