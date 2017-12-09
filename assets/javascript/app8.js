var questionAsked = 0;
var correct = 0;
var gameOver = false;

var game = {
	generateQandA: function() {
	    console.log("generateQandA function");

	    var question = questions[questionAsked].question;
	    var answerOptions = $(document).find(".quizContainer > .question");
	    var answerChoice = $(document).find(".quizContainer > .answerChoice");
	    var numChoices = questions[questionAsked].all_a.length;

	    // Set the answerOptions text to the current question
	    $(answerOptions).text(question);

	    // Remove all current <li> elements (if any)
	    $(answerChoice).find("li").remove();

	    var option;
	    for (i = 0; i < numChoices; i++) {
	        option = questions[questionAsked].all_a[i];
	        // $('<button><value=' + i + '" />' + option + '</button>').appendTo(answerChoice);
	    	console.log(option);
	    	$('<li><input type="radio" value=' + i + ' name="dynradio" />' 
	    		+ option + '</li>').appendTo(answerChoices);
	    }
	},
	reset: function() {
		console.log("reset function");
		questionAsked = 0;
    	correct = 0;
    	hide();
	},
	display: function() {
		console.log("display function");
		$(document).find(".quizContainer > .result").html("<div> Your Score <br>"
			+ "<div> Total Correct: " + correct + "</div>"
			+ "<div> Incorrect: " + wrong + "</div>");
    	$(document).find(".quizContainer > .result").show();
	},
	hide: function() {
		console.log("hide function");
		$(document).find(".result").hide();
	}
}

$(document).ready(function () {
	$(".nextButton").hide()

	$(document).on('click', '#start', function() {

		$("#start").hide();
		$(".nextButton").show();

		console.log("52");
	    // Display the first question
	    game.generateQandA();
	    $(this).find(".message").hide();

	    // On clicking next, display the next question
	    $(this).find(".nextButton").on("click", function () {
	        if (!gameOver) {

	            value = $("input[type='radio']:checked").val();

	            if (value == undefined) {
	                $(document).find(".message").text("Please select an answer");
	                $(document).find(".message").show();
	                // notAnswered++;
	            } else {
	                // TODO: Remove any message -> not sure if this is efficient to call this each time....
	                $(document).find(".message").hide();

	                if (value == questions[questionAsked].correctAnswer) {
	                    correct++;
	                }
	                questionAsked++;
	                if (questionAsked < questions.length) {
	                    game.generateQandA();
	                } else {
	                    game.displayScore();

	                    // Change the text in the next button to ask if user wants to play again
	                    $(document).find(".nextButton").text("Play Again?");
	                    gameOver = true;
	                }
	            }
	        } else {
	            gameOver = false;
	            $(document).find(".nextButton").text("Next Question");
	            game.reset();
	            game.generateQandA();
	            game.hide();
	        }
	    });
	});
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