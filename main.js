let raceNumber = Math.floor(Math.random()*1000);
let runnerRegisteredEarly = true;
let runnerAge = 18;

console.log(raceNumber)

if(runnerRegisteredEarly){
  console.log(raceNumber += 1000)
} else if(runnerAge && runnerRegisteredEarly){
  console.log(raceNumber + ':  You will run at 9:30')
} else if(runnerRegisteredEarly || runnerAge){
  console.log(raceNumber + ' : You will run at 11:00 am ')
} else if(runnerRegisteredEarly === false && runnerAge < 18){
  console.log(raceNumber + ' : You will run at 12:30 pm')
} else {console.log('See registration desk')};

