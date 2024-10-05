let config = {
    alert: setInterval(() => {
      console.log('Alert!');
    }, 1000),
  };
  
  config = null;


  //Answer C: The setInterval callback will still be called every second