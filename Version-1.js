//Create a program that randomly returns a sentence made up of three pieces of data. 

///// VERSION ONE /////

//Step 1 = Store message components.

//   let messageComponents = {
//     signs: ['moon', 'sun', 'stars', 'earth'],
//     luckState: ['Good luck', 'Bad luck', 'okay luck'],
//     youShould: ['Go outside', 'Play ball', 'go for a walk']
//   };
  
//   // randomly select one element from each array
//   let randomSign = messageComponents.signs[Math.floor(Math.random() * messageComponents.signs.length)];
//   let randomLuckState = messageComponents.luckState[Math.floor(Math.random() * messageComponents.luckState.length)];
//   let randomYouShould = messageComponents.youShould[Math.floor(Math.random() * messageComponents.youShould.length)];
  
//   // log the randomly selected elements to the console
//   console.log(`your sign is: ${randomSign}`);
//   console.log(`your luck today is:${randomLuckState}`);
//   console.log(`You should: ${randomYouShould}`);
  

  
//   ////// VERSION TWO /////
  
//   //Step 1 = Store message components

// const dayOfWeek = ['Sunday','Monday','Tuesday','Wednsday','Thursday','Friday','Shabbos'];
// const howYourFeeling = ['happy','sad','excited','mad','curious'];
// const whatYouShouldDo = ['go outside', 'play ball', 'go for a walk','learn'];

// // Step 2 = Get a random string from each variable and store it


// let randomdayOfWeek = dayOfWeek[Math.floor(Math.random() * dayOfWeek.length)]
// let randomhowYourFeeling = howYourFeeling[Math.floor(Math.random() * howYourFeeling.length)]
// let randomwhatYouShouldDo = whatYouShouldDo[Math.floor(Math.random() * whatYouShouldDo.length)]

// // step 3 = declare a new variable with final message.

// let finalMessage = `Today is ${randomdayOfWeek}, and your feeling ${randomhowYourFeeling}, therfore your should ${randomwhatYouShouldDo}.`

// console.log(finalMessage)

////// VERSION THREE ///////




// Step 1 = Store messages in a container. I'll use an object this time.

const messageContainer = {
    petOptions: ['snake','bird','fish','rabbit','dog','cat'],
    qualityOfOwning: ['best','worst','most fun','most playful'],
    likePets: ['like','are obsessed','are okay with','love']
}

// Step 2 = Create a variable to push the final message to.

let finalOutput = []

// Step 3 = Create a function that will generate a random number based on the length of an array.

const generateRandomNumber = num => Math.floor(Math.random()* num)

// Step 3 = Iterate through the object and select a random string from each propertie's array

for(let randstring in messageContainer){
 let randomIndx = generateRandomNumber(messageContainer[randstring].length)
 switch(randstring){
    case 'petOptions':
        finalOutput.push(`A ${messageContainer[randstring][randomIndx]}`)
        break
    case 'qualityOfOwning':
        finalOutput.push(` is the ${messageContainer[randstring][randomIndx]} pet to own`)
        break
    case 'likePets':
        finalOutput.push(` if you ${messageContainer[randstring][randomIndx]} pets.`)
        break
 }
}
console.log(finalOutput.join(''));