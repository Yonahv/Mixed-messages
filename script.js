
  let messageComponents = {
    signs: ['moon', 'sun', 'stars', 'earth'],
    luckState: ['Good luck', 'Bad luck', 'okay luck'],
    youShould: ['Go outside', 'Play ball', 'go for a walk']
  };
  
  // randomly select one element from each array
  let randomSign = messageComponents.signs[Math.floor(Math.random() * messageComponents.signs.length)];
  let randomLuckState = messageComponents.luckState[Math.floor(Math.random() * messageComponents.luckState.length)];
  let randomYouShould = messageComponents.youShould[Math.floor(Math.random() * messageComponents.youShould.length)];
  
  // log the randomly selected elements to the console
  console.log(`your sign is: ${randomSign}`);
  console.log(`your luck today is:${randomLuckState}`);
  console.log(`You should: ${randomYouShould}`);
  