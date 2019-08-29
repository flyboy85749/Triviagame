///////////////////////////////////////////////////////////////
//////// TRIVIA CHALLENGE GAME JAVASCRIPT  /////////////////   
////    https://github.com/flyboy85749/Triviagame  /////////
////
////    https://flyboy85749.github.io/Triviagame  /////////////
////    * You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// * If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// * The scenario is similar for wrong answers and time-outs.

//   * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

// * On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
////////////////////////////////////////////////////////////////

https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple

/////////////////////////////////////////////////////////////////
//////// *************** VARIABLES ******************///////////
////////////////////////////////////////////////////////////////

// set timer value;
// var twentyFive = setTimeout(function() {
//     alert("Time's up. Next question");
//   }, 25000);

  
// assign questions to a variable, as well as answers
var questions = "";
var answers = "";

// keep track of correct and incorrect answers
const responses = [0, 0]; // correct/incorrect


// create timer
// var timer = setTimeout(twentyFiveSeconds, 1000 * 25);


/////////////////////////////////////////////////////////////////
//////// *************** FUNCTIONS ******************///////////
////////////////////////////////////////////////////////////////

// put everything within your document ready function
// $(document).ready(function () {
// // add code here

// function timer () {
//   time = console.log(timer);
// }












// });
/////////////////////////////////////////////////////////////////
//////// *************** PROCESSES ******************///////////
////////////////////////////////////////////////////////////////
