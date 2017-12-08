var questions = [
	{
		q: "Which of these countries is NOT a part of the Asian continent?",
		correct_a: "Suriname",
		// img: "<img src=' '>",
		all_a: [
			"Suriname",
			"Georgia",
			"Russia",
			"Singapore"
		]
	},
	{
		q: "Who is attributed credit for recording the epic poem The Odyssey?",
		correct_a: "Homer",
		// img: "<img src=' '>",
		all_a: [
			"Homer",
			"Aristotle",
			"Odysseus",
			"Socrates"
		]
	},
	{
		q: "The book &quot;The Little Prince&quot; was written by...",
		correct_a: "Antoine de Saint-Exup&eacute;ry",
		// img: "<img src=' '>",
		all_a: [
			"Antoine de Saint-Exup&eacute;ry",
			"Miguel de Cervantes Saavedra",
			"Jane Austen",
			"F. Scott Fitzgerald"
		]
	},
	{
		q: "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
		correct_a: "Cheetah",
		// img: "<img src=' '>",
		all_a: [
			"Cheetah",
			"Puma",
			"Tiger",
			"Leopard"
		]
	}
];

var game = {
	seconds: 11,
	correct: 0,
	wrong: 0,
	// j: 0,
	timer: function() {
		
		if (game.seconds > 0) {
			game.seconds--;
			$("#time-left").html("<p>Time Remaining: " + game.seconds + " seconds</p>");
		}
	},
	reset: function() {
		seconds = 11;
		$("#question").empty();
		$("#answerChoices").empty();
	},
	correctWrong: function() {
		$("#correct-wrong").empty();
	},
	generateQandA: function() {
		// randomize q and q
		var random = Math.floor(Math.random() * questions.length);

		// Question
		$("#question").html(questions[random].q);

		// Answer
		for (var i = 0; i < questions[random].all_a.length; i++) {
			var div = $("<div>");
			div.text(questions[random].all_a[i]);
			div.addClass("answerOptions");
			div.attr("data-value", questions[random].all_a[i]);
			$("#answerChoices").append(div);
		}
	},
	userPicked: function() {
		var userPick = $(this).attr("data-value");
	},
	resultTransition: function() {
		// after couple seconds go to next question
		setTimeout(game.correctWrong, 4000);
		setTimeout(game.reset, 4000);
		setTimeout(game.generateQandA, 4001);
	},
	correctAnswer: function() {
		if (game.userPicked === questions[random].correct_a){
			// $("#question").empty();
			// $("#answerChoices").empty();
			$("#correct-wrong").html("<h2> Correct! </h2>");
			game.resultTransition;
		}
	},
	wrongAnswer: function() {
		if (userPicked !== questions[random].correct_a) {				
			$("#correct-wrong").html("<h2> Wrong! Correct answer is " 
				+ questions[random].correct_a + "</h2>");
			// $("#question").empty();
			game.resultTransition;
		}
	},
	timesUp: function() {
		if (seconds === 0) {
			$("#correct-wrong").html("<h2> Time is up! Correct answer is... " 
			+ questions[random].correct_a + " </h2>");
			game.resultTransition;
		}
	}
}


// default page with start button; done on html

// press start to activate questions and timer
$('#start').on("click", function(event) {
	// remove Start button
	$("#start").hide();

	// start timer
	game.timer();
	var counter = setInterval(game.timer, 1000);

	// Prevents submit button from trying to submit the form	
	event.preventDefault();
	// Generate Question and Answer
	game.generateQandA;

	// if user gets correct or wrong answer, or time is up
	game.correctAnswer();
	game.wrongAnswer();
	game.timesUp();

});


















// if right, go to next question
// if wrong, show right answer and go to next question
// if time up, show right answer and go to next question
// after last question, show numbers correct and incorrect