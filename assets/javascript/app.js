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

// put everything within your document ready function
https: $(document).ready(function() {
  /////////////////////////////////////////////////////////////////
  //////// *************** VARIABLES ******************///////////
  ////////////////////////////////////////////////////////////////
  var correct = 0
  var wrong = 0
  var score = (correct + wrong)
  var queryURL =
    'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple'

  /////////////////////////////////////////////////////////////////
  //////// *************** FUNCTIONS ******************///////////
  ////////////////////////////////////////////////////////////////
  function nextQuestion() {

    
    
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(response) {
      // console.log(response.results);

      // assign variable to hold category for questions
      const category = [response.results[0].category]

      // display on page
      $('.category').html('The category is: ' + category)

      // assign a variable question to redisplay questions with
      const question = $('.question-text').html(response.results[0].question)
      

      // do the same thing with answers
      // create an array with wrong answers, then add correct answer
      const answers = response.results[0].incorrect_answers // incorrect answers

      answer = response.results[0].correct_answer // correct answer

      // puts all answers in one array
      answers.push(answer)
      
      // display randomly
      
      
          
      // attaches answers text to buttons and displays them randomly (?)
      renderButtons(answers)
      // $(".corAns").empty()
      // $(".wroAns").empty()
    })

    
  }

  function alertButtonPush() {
    const buttonPush = $(this).attr('data-name')

    if (buttonPush === answer) {
      correct++
      score++
      $('.correct').text('Correct: ' + correct)
      // console.log(correct)
      $('.corAns').text("That's right! The correct answer is " + answer)
      
      nextQuestion()
      $('.wroAns').empty()
    } else {
      $('.wroAns').text('That is the wrong answer, try again')
      wrong++
      score++
      $('.wrong').text('Incorrect: ' + wrong)
      
      nextQuestion()
      $('.corAns').empty()
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

    // pulling in questions from an open API
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(response) {
      // console.log(response.results);

      // assign variable to hold category for questions
      const category = [response.results[0].category]

      // display on page
      $('.category').html('The category is: ' + category)

      // assign a variable question to redisplay questions with
      const question = $('.question-text').html(response.results[0].question)
      // console.log(response.results[0].question)

      // do the same thing with answers
      // create an array with wrong answers, then add correct answer
      const answers = response.results[0].incorrect_answers // incorrect answers

      answer = response.results[0].correct_answer // correct answer

      // puts all answers in one array
      answers.push(answer)
      
      // display randomly
      
      // console.log(answers)
          
      // attaches answers text to buttons and displays them randomly (?)
      renderButtons(answers)
    })

    // event listener for the whole page
    $(document).on('click', '.answer', alertButtonPush)

    // start the 25 second timer
    function startTimer() {
      var timeleft = 25
      var answerTimer = setInterval(function() {
        $('.time-remaining').text("Time remaining: " + timeleft)
        timeleft -= 1
        if (timeleft <= 0) {
          clearInterval(answerTimer)
          nextQuestion()
          // startTimer()
          // console.log("Time's Up!")
          wrong++ // adds 1 to the wrong counter, for no
          score++ 
          $('.wrong').text('Incorrect: ' + wrong)
         
        }
      }, 1000)
      
    }

    function stopGame() {
      if (score === 10) {
        console.log("Stop Game!")
      }
      
    }
    stopGame()
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
  $('.wrong').text('Incorrect: ' + wrong)
})
