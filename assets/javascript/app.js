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

https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple

/////////////////////////////////////////////////////////////////
//////// *************** VARIABLES ******************///////////
////////////////////////////////////////////////////////////////
// put everything within your document ready function
$(document).ready(function () {
    // add code here
    // set timer value;
    // var twentyFive = setTimeout(function () {
    //     nextQuestion();
    // }, 25000);


    // assign questions to a variable, as well as answers
    var questions = "";
    var answers = "";

    // keep track of correct and incorrect answers
    var correct = 0;
    var wrong = 0;
    




    /////////////////////////////////////////////////////////////////
    //////// *************** FUNCTIONS ******************///////////
    ////////////////////////////////////////////////////////////////
    function startGame () {
        // set starting conditions
        
            
    }

    function nextQuestion () {
        
    }

    function correct () {
        if (buttonClick === responses.result.correct_answer) {
            alert("That is the correct answer!");
            correct++;
        }
    }

    function countAnswers () {

    }

    // Button triggers new movie to be added 
    //   <input id="add-movie" type="submit" value="Add a Movie, Yo!">
    // </form>
    
      // Initial array of movies
    //   var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

    //   /* // Function for displaying movie data
    //   //function renderButtons()  */

    //     $("#buttons-view").empty();
    //     // YOUR CODE GOES HERE
    //     for (i = 0; i < movies.length; i++) {

    //       // store for use with all buttons
    //       var button = $("<button>");

    //         // add a class that we can target
    //         button.addClass("movie");

    //         // add an attribute
    //         button.attr("name", movies[i]);

    //         // add the text for the buttons
    //         button.text(movies[i]);

    //         // now, display the buttons
    //         $("#buttons-view").append(button);
    //     }

    //   }

    //   // This function handles events where one button is clicked
    //   $("#add-movie").on("click", function() {

    //     // YOUR CODE GOES HERE
    //     event.preventDefault();
    //     // take the entered value
    //     var movie = $("#movie-input").val();

    //     // add it to the movies array
    //     movies.push(movie);
        

    //     renderButtons();

    //   });
    //   console.log(movies); // does not show the new movie

    //   // Calling the renderButtons function to display the initial list of movies
    //   renderButtons();

    
    
















    /////////////////////////////////////////////////////////////////
    //////// *************** PROCESSES ******************///////////
    ////////////////////////////////////////////////////////////////

    $(".rules-text").click(function(){
        alert("The rules are pretty simple. We'll show you a trivia question and some multiple choice answers. You will have 25 seconds to answer each question. If you answer correctly before the timer expires, you will score 1 point. If not, you will lose a point.");
      });

      






});