var readlineSync = require("readline-sync");
const chalk = require('chalk');

    var highScore = [{
			name: "Dhriti",
			score: 5
		},
    {
			name: "Lakshay Kaushik",
			score: 5
		},
		]

 

var userName = readlineSync.question("Hi Buddy! Please Enter your name: ");
console.log(chalk.redBright.bgWhiteBright.bold("\nWelcome " + userName + " to the quiz game :)\n"));
console.log(chalk.black.bgBlueBright.bold.underline("Let's see Are you Chatur Enough To Pass This Ultimate '3 idiots' Quiz"));
var score = 0;

 function play(question,answer) {
  var userAnswer=readlineSync.question("\n"+question+"\n");


 if (userAnswer === answer) {
    console.log(chalk.green.bold("Yipeee! Right Answer"));
    score = score + 1;
    
  } else {
    console.log(chalk.red.bold("Oops! Wrong Answer, Right answer is: "+ answer));
   }


  
  console.log(chalk.white.bold(userName + " Your Current Score is : ", score));
  console.log("----------------------------------------------")
  
}

var queSet = [
  {
    question: `
Q1. Rancho escapes ragging by employing a basic concept of physics. Which concept was it?\n
a) An object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.
b) Saltwater is a great conductor of electricity. 
c) Electric current is proportional to voltage and inversely proportional to resistance.
d) Acceleration of an object depends on two things, force and mass.\n `,
  
    answer: "b"
  },

  {
    question: `
Q2. For how many minutes does Virus listen to opera?\n
a) 5
b) 30
c) 7
d) 7.5\n`,

    answer: "d"
  },

  {
    question: `
Q3. Raju drunkenly sings a song when Rancho professes his feelings to Pia. What song was it?
a) Kuch Naa Kaho, Kuch Bhi Na Kaho
b) Aaj Janey Ki Jid Na Karo
c) Aaj Mausam Bada Baiman Hai
d) Zoobi Doobi\n`,

    answer: "a"
  },

  {
    question: `
Q4. Rancho, Farhan, and Raju are caught gate-crashing Virus' daughter's wedding. Whose guest does Rancho claim to be?\n
a) Science ki taraf se
b) Ladkewalo ki taraf se
c) Ladkiwalon ki taraf se
d) Experiment ki taraf se\n`,

    answer: "a"
  },

  {
    question: `
Q5. Farahn's letter from Andre Istavaan came from?\n
a) Brazil
b) Hungary
c) South Africa
d) New York\n`,

    answer: "b"
  }

]

for(var i = 0; i<queSet.length; i++){
  var currentques = queSet[i];
  play(currentques.question,currentques.answer);
}

console.log(chalk.redBright.bgBlack.bold.underline("\nHey " + userName + ",Your " +" final score is: " + score));

console.log(chalk.yellow.bold("\nTop two highest scorers before you played: "));

for(var k=0; k<highScore.length; k++){
  var details = highScore[k];
  console.log(details.name + ": " + details.score);
}


if(highScore[0].score <= score && highScore[1].score <= score){
  console.log("\n");
  console.log(chalk.white.bgRed.bold.underline("Congrats! But now you have become the top scorer"));
  console.log(chalk.white.bgRed.bold.underline("Take a screenshot and Whatsapp me,"));
  console.log(chalk.white.bgRed.bold.underline("I'll update top two high scorers in my database :)"));
}

else{
  console.log(chalk.white.bgRedBright.bold.underline("\nNot a winner, but well played :)"));
}