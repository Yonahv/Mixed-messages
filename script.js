//Create a program that randomly returns a sentence made up of three pieces of data. 

///// VERSION ONE /////

//Step 1 = Store message components.

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
  

  
  //////VERSION TWO /////
  
  //Step 1 = Store message components

const dayOfWeek = ['Sunday','Monday','Tuesday','Wednsday','Thursday','Friday','Shabbos'];
const howYourFeeling = ['happy','sad','excited','mad','curious'];
const whatYouShouldDo = ['go outside', 'play ball', 'go for a walk','learn'];

// Step 2 = Get a random string from each variable and store it


let randomdayOfWeek = dayOfWeek[Math.floor(Math.random() * dayOfWeek.length)]
let randomhowYourFeeling = howYourFeeling[Math.floor(Math.random() * howYourFeeling.length)]
let randomwhatYouShouldDo = whatYouShouldDo[Math.floor(Math.random() * whatYouShouldDo.length)]

// step 3 = declare a new variable with final message.

let finalMessage = [`Today is ${randomdayOfWeek}, and your feeling ${randomhowYourFeeling}, therfore your should ${randomwhatYouShouldDo}.`]

console.log(finalMessage)