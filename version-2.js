
  ////// VERSION TWO /////
  
//Step 1 = Store message components.

const dayOfWeek = ['Sunday','Monday','Tuesday','Wednsday','Thursday','Friday','Shabbos'];
const howYourFeeling = ['happy','sad','excited','mad','curious'];
const whatYouShouldDo = ['go outside', 'play ball', 'go for a walk','learn'];

// Step 2 = Get a random string from each variable and store it


let randomdayOfWeek = dayOfWeek[Math.floor(Math.random() * dayOfWeek.length)]
let randomhowYourFeeling = howYourFeeling[Math.floor(Math.random() * howYourFeeling.length)]
let randomwhatYouShouldDo = whatYouShouldDo[Math.floor(Math.random() * whatYouShouldDo.length)]

// step 3 = declare a new variable with final message.

let finalMessage = `Today is ${randomdayOfWeek}, and your feeling ${randomhowYourFeeling}, therfore your should ${randomwhatYouShouldDo}.`

console.log(finalMessage)
