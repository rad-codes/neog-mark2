
var readlineSync = require('readline-sync');
var userName = readlineSync.question("What is your name?");
console.log("Welcome " + userName + " do you know FRIENDS Well")
var score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score = score + 1;
    console.log("You are Right!Score " + score)
  }
  else {
    console.log("You are Wrong!Score " + score)
  }
}
var questions = [{
  question: "Where do Rachel and Ross go on their first date?",
  answer: "museum"
},
{
  question: "Monica organises her towels into several categories. But how many?",
  answer: "11"
},
{
  question: "What are Monica and Ross' parents called?",
  answer: "jack and judy"
},
{
  question: "What is the name of Joey’s acting agent?",
  answer: "Estelle"
}, {
  question: "Which job did Rachel’s fiancé Barry Farber do?",
  answer: "Orthodontist"
}
]
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}
console.log("Your Final Score " + score + "/" + questions.length);