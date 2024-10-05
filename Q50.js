function greeting() {
    throw 'Hello world!';
  }
  
  function sayHi() {
    try {
      const data = greeting();
      console.log('It worked!', data);
    } catch (e) {
      console.log('Oh no an error:', e);
    }
  }
  
  sayHi();

  //ans D: Oh no an error: Hello world!