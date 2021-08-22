var readlineSync=require('readline-sync');
var chalk= require('chalk');

console.log(chalk.bold.bgRed("\nHey, Do you like Superhero movie??"));

console.log(chalk.bold.hex('ffa45b')("\nHope you will enjoy this game!"));


var score = 0;

// data of high score
var highScores = [
  {
    name: "Jyoti",
    score: 6,
  },

  {
    name: "Krishana",
    score: 5,
  },
]
var anss="answer: "
// array of objects
var questions = [{
  question: chalk.bgHex('f56942')("\n 1.The Man of Steel is another name for which superhero?  \n\na: Batman \nb: Superman \nc: Iron Man \n\n Answer: "),  
  answer: "b"
},{
  question: chalk.bgHex('f56942')("\n 2. What is the real name of Batman? \n\na: Bruce Wayne \nb: Bruce Davis \nc: Bruce Devon \n\n\nAnswer: "),
  answer: "a"
}, 
{
  question:chalk.bgHex('f56942')("\n 3. Batman protects which city? \n\na: Gotham City \nb: Chicago \nc: Metropolis \n\n\nAnswer: "),
  answer: "a"
},
{
  question: chalk.bgHex('f56942')("\n 4. How did Spiderman have his superpowers? \n\na: He was born with the powers \nb: He was affected by a chemical explosion \nc: He was bitten by a spiders \n\n\nAnswer: "),
  answer: "c"
},
{
  question: chalk.bgHex('f56942')("\n 5. Which superhero said that “Who knows what evil lurks in the hearts of men?” \n\na: The Thing \nb: The Shadow \nc: The Devastator \n\n\nAnswer: "),
  
  answer: "b"
}];

function welcome() {
 var userName = readlineSync.question(chalk.bold.red ("\nWhat's your name? ")).toUpperCase();

 var name=(chalk.bold.yellow (userName));

  console.log("Hey! "
   +name+ " Welcome, Happy to see you here!");

console.log(`${chalk.bold.bgHex('ec524b')('\n KNOW THE RULES : ')}\n`);

console.log(`${chalk.bold.hex('cfd3ce')("    1. Quiz contains 5 questions. At last you will get your final score")}\n`);
console.log(`${chalk.bold.hex('cfd3ce')("    2. Select an option among a, b and c. Each correct answer adds up 1 point to existing score.")}\n`);


console.log(chalk.bgHex('132cd1') ("\n Lets Start With QUIZ!"));

}

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("\nwrong!");
   
  }

  console.log((chalk.bold.hex('fecd1a') ("current score: ")), score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
   
   var currentQuestion = questions[i];
  
    play(currentQuestion.question,currentQuestion.answer)
  
  
  }  
    
}

function showScores() {
 
  console.log((chalk.black.bgGreen.bold("\n YAY! You SCORED: ")), score);

  console.log((chalk.bold.hex('f70a12')("\nCheck out the high scores, if you should be there ping me and I'll update it \n")));

  console.log((chalk.bgHex('0eebd8').bold.black("Kindly Find Highest score \n")));

  highScores.map(score => console.log( score.name, " : ", score.score))

  console.log((chalk.bgHex('faf605').bold.black("\nNote: ")), (chalk.bold.hex('f507f1') ("If you are high scorer so you can reach out to me using below platforms with Screenshots")));

  console.log((chalk.bold.white("\nMobile Number: ")),(chalk.bold.hex('fa2a05') ("+91 7219451977")));
 
  console.log((chalk.bold.white("Linkdin: ")), (chalk.bold.hex('fa2a05')("https://www.linkedin.com/in/ashok-jadhav-6a62bb185")));

   console.log((chalk.bold.white("facebook: ")), (chalk.bold.hex('fa2a05') ("https://www.facebook.com/profile.php?id=100006769126891")));
  
   console.log((chalk.bold.white("Instagam: ")), (chalk.bold.hex('fa2a05') ("https://www.instagram.com/its_me_ashkya/")));

   console.log(chalk.bold.white("\n\n             Thank you for using :)\n\n\n\n\n"));
}


welcome();
game();
showScores();