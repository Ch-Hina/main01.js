const settings = {
    username: 'lydiahallie',
    level: 19,
    health: 90,
  };
  
  const data = JSON.stringify(settings, ['level', 'health']);
  console.log(data);

  //answer A: "{"level":19, "health":90}"
