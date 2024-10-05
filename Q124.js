function getFine(speed, amount) {
    const formattedSpeed = new Intl.NumberFormat('en-US', {
      style: 'unit',
      unit: 'mile-per-hour'
    }).format(speed);
  
    const formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  
    return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`;
  }
  
  console.log(getFine(130, 300))

  //B: The driver drove 130 mph and has to pay $300.00