async function getData() {
    return await Promise.resolve('I made it!');
  }
  
  const data = getData();
  console.log(data);

  //Answer C: Promise {<pending>}