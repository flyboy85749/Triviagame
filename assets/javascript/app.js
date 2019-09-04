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
///////////////////a/////////////////////////////////////////////

//opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple

https: // put everything within your document ready function
$(document).ready(function() {
  /////////////////////////////////////////////////////////////////
  //////// *************** VARIABLES ******************///////////
  ////////////////////////////////////////////////////////////////
  var correct = 0
  var wrong = 0
  var queryURL =
    'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple'
  

  /////////////////////////////////////////////////////////////////
  //////// *************** FUNCTIONS ******************///////////
  ////////////////////////////////////////////////////////////////
  function nextQuestion() {
      
  }
  
  function alertButtonPush() {
    const buttonPush = $(this).attr('data-name')
    
        if (buttonPush === answer) {
          
      alert("That's right! The correct answer is " + answer)
      correct = correct++
    }
    else {
      
      alert("That is the wrong answer, try again")
      wrong = wrong++
    }
  }
  

  function renderButtons(answers) {
    //     // YOUR CODE GOES HERE

    // empty div
    $('.answer-text').empty()

    for (i = 0; i < answers.length; i++) {
      //         // store for use with all buttons
      var button = $('<button>')

      //         // add a class that we can target
      button.addClass('answer')

      //         // add an attribute
      button.attr('data-name', answers[i])

      //         // add the text for the buttons
      button.text(answers[i])

      //         // now, display the buttons
      $('.answer-text').append(button)
    }
  }

  $('.start').click(startGame)

  function startGame(event) {
    // set starting conditions
    event.preventDefault()

    correct = 0
    wrong = 0

    startTimer()

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(response) {
      // console.log(response.results);

      // assign variable to hold category for questions
      const category = [response.results[1].category]

      // display on page
      $('.category').html('The category is: ' + category)

      // assign a variable question to redisplay questions with
      const question = $('.question-text').html(response.results[1].question)

      // do the same thing with answers
      // create an array with wrong answers, then add correct answer
      const answers = response.results[1].incorrect_answers // incorrect answers

      answer = response.results[1].correct_answer // correct answer

      answers.push(answer)
      console.log(answers)
      // var test = answer.join("-");
      // console.log(test);
      //  $(".answer-text").html(answer.join(" "));

      renderButtons(answers)
    })

    $(document).on('click', '.answer', alertButtonPush)

    function startTimer() {
      var timeleft = 25
      var answerTimer = setInterval(function() {
        $('.time-remaining').text(timeleft)
        timeleft -= 1
        if (timeleft <= 0) {
          clearInterval(answerTimer)
          // nextQuestion();
        }
      }, 1000)
    }

    
  }
  

  /////////////////////////////////////////////////////////////////
  //////// *************** PROCESSES ******************///////////
  ////////////////////////////////////////////////////////////////

  $('.rules-text').click(function() {
    alert(
      "The rules are pretty simple. We'll show you a trivia question and some multiple choice answers. You will have 25 seconds to answer each question. If you answer correctly before the timer expires, you will score 1 point. If not, you will lose a point."
    )
  })

  $('.correct').text('Correct: ' + correct)
  $('.wrong').append('Incorrect: ' + wrong)
})
