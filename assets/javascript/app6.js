var correct = 0;
var wrong = 0;

    function timer() {
        var counter = setInterval(function() {
        game.seconds--;
        // console.log(game.seconds);
            if (game.seconds > 0) {
                $("#time-left").html("<p>Time Remaining: " + game.seconds + " seconds</p>");
            }
            if (game.seconds === 0) {
                $("#time-left").hide();
                clearInterval(game.seconds);
                console.log("Hi!");
                // game.reset();

                // return;
                console.log('line 19');
                setTimeout(game.correctWrong, 3000);
                setTimeout(game.reset, 3000);
                setTimeout(game.generateQandA, 4000);

                if (game.random === questions.length) {
                    clearInterval(game.generateQandA);
                    $("#question").empty();
                    $("#time-left").empty();
                }
            }
        }, 1000);
    },


var game = {
    seconds: 4,

    random: -1,
    // j: 0,
    reset: function() {
        console.log("line 19");
        game.seconds = 11;
        $("#question").empty();
        $("#answerChoices").empty();
        $("#correct-wrong").empty();
    },
    correctWrong: function() {
        console.log('line 27');
        $("#correct-wrong").empty();
    },
    generateQandA: function() {

        // Question
        // game.random = Math.floor(Math.random() * questions.length);
        game.random++;

         // = random;
        console.log(game.random);
        console.log('line 34');

        if (game.random < questions.length) {
            $("#question").html(questions[game.random].q);
            // Answer
            for (var i = 0; i < questions[game.random].all_a.length; i++) {
                var div = $("<div>");
                div.text(questions[game.random].all_a[i]);
                div.addClass("answerOptions");
                div.attr("data-value", questions[game.random].all_a[i]);
                $("#answerChoices").append(div);
            }
        } else {
            game.random = 4;
            $("#question").empty();
            $("#time-left").empty();
        }
    },
    // resultTransition: function() {
    //     console.log('line 89');
    //     // after couple seconds go to next question

    // },
    correctAnswer: function() {
        correct++;
        $("#correct-wrong").html("<h2> Correct! </h2>");
        // game.resultTransition();
    },
    wrongAnswer: function() {
        wrong++;
        $("#correct-wrong").html("<h2> Wrong! Correct answer is " 
                + questions[game.random].correct_a + "</h2>");
          // $("#question").empty();
        // game.resultTransition();
    },
    timesUp: function() {
        $("#correct-wrong").html("<h2> Time is up! Correct answer is... " 
        + questions[game.random].correct_a + " </h2>");
         // game.resultTransition();
    },
    result: function() {
        $("#result").html("<div> Your Score <br>" +
            "Total correct: " + correct + "</div>"
            + "<div> Total incorrect: " + wrong + "</div>");
    }
}
// default page with start button; done on html
// press start to activate questions and timer
$(document).on('click', '#start', function() {
    // remove Start button
    $("#start").hide();
    // start timer

    game.timer();
    var intervalID = setInterval(game.timer, 1000);
    // console.log(counter);
    // Prevents submit button from trying to submit the form    
    // event.preventDefault();
    // Generate Question and Answer
    game.generateQandA();
    console.log(game.seconds);
    if (game.random ===  questions.length) {
       clearInterval(intervalID);
       clearInterval(counter);
       game.result();
    }
});
    $(document).on('click', '.answerOptions', function(){
        console.log($(this).attr('data-value'));
      if ($(this).attr('data-value') === questions[game.random].correct_a) {
        // setTimeout(game.timer, 4000);
        game.correctAnswer();
        console.log(correct);
        clearInterval(game.seconds);
        setTimeout(game.correctWrong, 3000);
        setTimeout(game.reset, 3000);
        setTimeout(game.generateQandA, 4000);
      } else if ($(this).attr('data-value') !== questions[game.random].correct_a) {
        game.wrongAnswer();
        clearInterval(game.seconds);
        // setTimeout(game.timer, 4000);
        console.log('line 93');
        setTimeout(game.correctWrong, 3000);
        setTimeout(game.reset, 3000);
        setTimeout(game.generateQandA, 4000);
      }
});
// if right, go to next question
// if wrong, show right answer and go to next question
// if time up, show right answer and go to next question
// after last question, show numbers correct and incorrect



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
        correct_a: "Antoine de Saint-Exupery",
        // img: "<img src=' '>",
        all_a: ["Antoine de Saint-Exupery", "Miguel de Cervantes Saavedra",
        "Jane Austen", "F. Scott Fitzgerald"]
    }, {
        q: "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
        correct_a: "Cheetah",
        // img: "<img src=' '>",
        all_a: ["Cheetah", "Puma", "Tiger", "Leopard"]
}];