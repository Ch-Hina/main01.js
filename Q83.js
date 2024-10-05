fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res));

  //Answer C: The result of the callback in the previous .then().