
var game = {
    seconds: 11,
    correct: 0,
    wrong: 0,
    random: undefined,
    // j: 0,
    timer: function() {
        console.log('line 54');
        if (game.seconds > 0) {
            game.seconds--;
            $("#time-left").html("<p>Time Remaining: " + game.seconds + " seconds</p>");
        }
        if (game.seconds === 0) {
            game.timesUp();
        }
    },
    reset: function() {
        console.log("line 64");
        game.seconds = 11;
        $("#question").empty();
        $("#answerChoices").empty();
        $("#correct-wrong").empty();
        game.generateQandA();
    },
    correctWrong: function() {
        console.log('line 70');
        $("#correct-wrong").empty();
    },
    generateQandA: function() {
        // Question
        var random = Math.floor(Math.random() * questions.length);
        game.random = random;
        console.log('line 76');
        $("#question").html(questions[game.random].q);
        // Answer
        for (var i = 0; i < questions[game.random].all_a.length; i++) {
            var div = $("<div>");
            div.text(questions[game.random].all_a[i]);
            div.addClass("answerOptions");
            div.attr("data-value", questions[game.random].all_a[i]);
            $("#answerChoices").append(div);
        }
    },
    // resultTransition: function() {
    //     console.log('line 89');
    //     // after couple seconds go to next question

    // },
    correctAnswer: function() {
        $("#correct-wrong").html("<h2> Correct! </h2>");
        // game.resultTransition();
    },
    wrongAnswer: function() {               
        $("#correct-wrong").html("<h2> Wrong! Correct answer is " 
            + questions[game.random].correct_a + "</h2>");
        // $("#question").empty();
        // game.resultTransition();
    },
    wrongAnswer: function() {
        $("#correct-wrong").html("<h2> Wrong! Correct answer is " 
                + questions[game.random].correct_a + "</h2>");
          // $("#question").empty();
        // game.resultTransition();
    },
    timesUp: function() {
        $("#correct-wrong").html("<h2> Time is up! Correct answer is... " 
        + questions[game.random].correct_a + " </h2>");
        game.reset();
         // game.resultTransition();
        }
}
// default page with start button; done on html
// press start to activate questions and timer
$('#start').on("click", function(event) {
    // remove Start button
    $("#start").hide();
    // start timer
    game.timer();
    setInterval(game.timer, 1000);
    // console.log(counter);
    // Prevents submit button from trying to submit the form    
    // event.preventDefault();
    // Generate Question and Answer
    game.generateQandA();
});
$(document).on('click', '.answerOptions', function(){
    console.log($(this).attr('data-value'));
  if($(this).attr('data-value') === questions[game.random].correct_a){
    game.correctAnswer();
    setTimeout(game.correctWrong, 3000);
    setTimeout(game.reset, 3000);
    setTimeout(game.generateQandA, 400);
  } else {
    game.wrongAnswer();
    setTimeout(game.correctWrong, 3000);
    setTimeout(game.reset, 3000);
    setTimeout(game.generateQandA, 400);
  }
});

var questions = [{
        q: "Which of these countries is NOT a part of the Asian continent?",
        correct_a: "Suriname",
        // img: "<img src=' '>",
        all_a: ["Suriname", "Georgia", "Russia", "Singapore"]
    }, {
        q: "Who is attributed credit for recording the epic poem The Odyssey?",
        correct_a: "Homer",
        // img: "<img src=' '>",
        all_a: ["Homer", "Aristotle", "Odysseus", "Socrates"]
    }, {
        q: "The book &quot;The Little Prince&quot; was written by...",
        correct_a: "Antoine de Saint-Exup&eacute;ry",
        // img: "<img src=' '>",
        all_a: ["Antoine de Saint-Exup&eacute;ry", "Miguel de Cervantes Saavedra",
        "Jane Austen", "F. Scott Fitzgerald"]
    }, {
        q: "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
        correct_a: "Cheetah",
        // img: "<img src=' '>",
        all_a: ["Cheetah", "Puma", "Tiger", "Leopard"]
}];





// if right, go to next question
// if wrong, show right answer and go to next question
// if time up, show right answer and go to next question
// after last question, show numbers correct and incorrect