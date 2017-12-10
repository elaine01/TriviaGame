// if right, go to next question
// if wrong, show right answer and go to next question
// if time up, show right answer and results
// after last question, show results
// resuls page, have restart option for user to play again

// global variables
var correct = 0;
var wrong = 0;
var unanswered = 11;

// global function
function timer() {
    var counter = setInterval(function() {
        game.seconds--;

        // when time is up, remove dynamic elements on screen and display restart button
        if (game.seconds === 0) {
            $("#time-left").hide();
            game.stop();
            $("#question").hide();
            $("#question").empty();
            $("#answerChoices").hide();
            $("#answerChoices").empty();
            game.result();
                
            $("#restart").show();
            $("#restart").on('click', function(){
                game.random = -1;
                game.reset();
            });
        }
        if (game.seconds > 0) {
            $("#time-left").html("<p>Time Remaining: " + game.seconds + " seconds</p>");
        }
    }, 1000);
}


var game = {
    seconds: 120,
    random: -1,
    reset: function() {
        $("#restart").hide();
        game.seconds = 120;
        correct = 0;
        wrong = 0;
        unanswered = 11;
        $("#result").empty();
        $("#time-left").show();
        $("#question").empty();
        $("#answerChoices").empty();
        $(".score").text("");
        game.random = -1;
        game.generateQandA();
        $("#question").show();
        $("#answerChoices").show();
    },
    // clear out question, image, and correct/wrong message before displaying next section
    correctWrong: function() {
        $("#correct-wrong").empty();
        $("#image").empty();
        $("#question").empty();
    },
    generateQandA: function() {
        // if user goes through all the questions
        if (game.random === 10) {
            $("#time-left").hide();
            game.seconds = 0;
            game.result();
            $("#question").empty();
            clearInterval(timer);
            $("#restart").show();

            // restart game once user clicks on restart
            $("#restart").on('click', function(){
                $("#restart").hide();
                game.random = -1;
                game.reset();
            });

        // if user didn't go through all the questions
        } if (game.random < 10) {
            game.random++;
            // $("#time-left").show();
            $("#question").html(questions[game.random].q);
            // Answer choices
            for (var i = 0; i < questions[game.random].all_a.length; i++) {
                var div = $("<div>");
                div.text(questions[game.random].all_a[i]);
                div.addClass("answerOptions");
                div.attr("data-value", questions[game.random].all_a[i]);
                $("#answerChoices").append(div);
            }
        }
    },
    correctAnswer: function() {
        correct++;
        $("#correct-wrong").html("<h2> Correct! </h2>");
        $("#answerChoices").empty();
        var img = imageArray[game.random]
        $("#image").append(img);
        $("#image").show();  
    },
    wrongAnswer: function() {
        wrong++;
        $("#correct-wrong").html("<h2> Wrong! Correct answer is " 
                + questions[game.random].correct_a + "</h2>");
        $("#answerChoices").empty();
        var img = imageArray[game.random]
        $("#image").append(img);
        $("#image").show();
    },
    timesUp: function() {
        $("#correct-wrong").html("<h2> Time is up! Correct answer is... " 
        + questions[game.random].correct_a + " </h2>");
    },
    result: function() {
        $("#result").html("<div class='score'> Your Score </div>" +
            "<div class='score'> Total correct: " + correct + "</div>"
            + "<div class='score'> Total incorrect: " + wrong + "</div>"
            + "<div class='score'> Total unanswered: "
            + (unanswered - (correct + wrong)) + "</div>");
    },
    // stop timer
    stop: function() {
        clearInterval(timer);
    },
    hideTime: function() {
        $("#time-left").hide();
    }
}

// on load, hide restart button and image
$(document).ready(function() {
    $("#restart").hide();
    $("#image").hide();
});

$(document).on('click', '#start', function() {
    // remove Start button
    $("#start").hide();
    
    // start timer
    timer();
    var intervalID = setInterval(game.timer, 1000);

    // generate questions
    game.generateQandA();
    if (game.random ===  questions.length) {
       clearInterval(intervalID);
       clearInterval(counter);
       game.result();
    }
});
    $(document).on('click', '.answerOptions', function(){
      if ($(this).attr('data-value') === questions[game.random].correct_a) {

        game.correctAnswer();
        clearInterval(game.seconds);
        setTimeout(game.correctWrong, 3000);
        // setTimeout(game.hideTime, 3000);
        setTimeout(game.generateQandA, 4000);
      } else if ($(this).attr('data-value') !== questions[game.random].correct_a) {
        game.wrongAnswer();
        clearInterval(game.seconds);
        setTimeout(game.correctWrong, 3000);
        // setTimeout(game.hideTime, 3000);
        setTimeout(game.generateQandA, 4000);
      }
});


var questions = [{
        q: "What's the name of Bellatrix' husband?",
        correct_a: "Rodolphus Lestrange",
        all_a: ["Albert Lestrange", "Rolphius Lestrange", 
        "Adolph Lestrange", "Rodolphus Lestrange"]
    }, {
        q: "What's the name of Percy's wife?",
        correct_a: "Audrey",
        all_a: ["Audrey", "Lucy", "Rosie", "Marjorie"]
    }, {
        q: "Which of these is a type of Love Potion?",
        correct_a: "Amortentia",
        all_a: ["Felixfelicis", "Amortentia", "Polyjuice Potion", "Veritaserum"]
    }, {
        q: "What class did Neville end up teaching at Hogwarts?",
        correct_a: "Herbology",
        all_a: ["Astronomy", "Muggle Studies", "Herbology", "Charms"]
    }, {
        q: "Which newspaper does Rita Skeeter work for?",
        correct_a: "The Daily Prophet",
        all_a: ["The Quibbler", "The Daily Prophet", "The Quidditch", "The Daily Wizard"]
    }, {
        q: "Which of these characters is a metamorphmagus?",
        correct_a: "Nymphadora Tonks",
        all_a: ["Minerva McGonagall", "Nymphadora Tonks",
        "Remus Lupin", "Harry Potter"]
    }, {
        q: "What's the name of Tonks and Lupin's son?",
        correct_a: "Edward",
        all_a: ["Theodore", "Lyall", "James", "Edward"]
    }, {
        q: "What's the name of Fleur Delacour's sister?",
        correct_a: "Gabrielle",
        all_a: ["Victoire", "Apolline", "Dominique", "Gabrielle"]
    }, {
        q: "Which class did Severus Snape always want to teach?",
        correct_a: "Defence Against the DA",
        all_a: ["Defence Against the DA", "Potions", "Charms", "Transfiguration"]
    }, {
        q: "What's the name of Ron Weasley's great-aunt?",
        correct_a: "Muriel",
        all_a: ["Marge", "Margot", "Muriel", "Marjorie"]
    }, {
        q: "Which Hogwarts house did Moaning Myrtle belong in?",
        correct_a: "Ravenclaw",
        all_a: ["Gryffindor", "Slytherin", "Ravenclaw", "Hugglepuff"]
    }
];

var imageArray = [
    "<br> <img class='0 image' height= '300px' src='assets/images/img0.jpg'>",
    "<br> <img class='1 image' height= '300px' src='assets/images/img1.jpg'>",
    "<br> <img class='2 image' height= '300px' src='assets/images/img2.jpg'>",
    "<br> <img class='3 image' height= '300px' src='assets/images/img3.jpg'>",
    "<br> <img class='4 image' height= '300px' src='assets/images/img4.jpg'>",
    "<br> <img class='5 image' height= '300px' src='assets/images/img5.jpg'>",
    "<br> <img class='6 image' height= '300px' src='assets/images/img6.jpg'>",
    "<br> <img class='7 image' height= '300px' src='assets/images/img7.jpg'>",
    "<br> <img class='8 image' height= '300px' src='assets/images/img8.jpg'>",
    "<br> <img class='9 image' height= '300px' src='assets/images/img9.jpg'>",
    "<br> <img class='10 image' height= '300px' src='assets/images/img10.png'>",
]

