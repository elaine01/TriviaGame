// var userPick = "",
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

var seconds = 11;


// setTimeout(timer, seconds);

function timer() {
	
	if (seconds > 0) {
		seconds--;
		$("#time-left").html("<p>Time Remaining: " + seconds + " seconds</p>");
		console.log(seconds);
	} 
}

function reset() {
	seconds = 11;
	// timer();
	// var counter = setInterval(timer, 1000);
	$("#question").empty();
	$("#answerChoices").empty();
}

function correctWrong() {
	$("#correct-wrong").empty();
}

function generateQandA() {
	// randomize questions
	var random = Math.floor(Math.random() * questions.length);

	// console.log(questions);
	console.log(questions[random].correct_a);
	// console.log(questions[random].all_a.length);		
	// console.log(random);			

	// time remaining
	// timer();
	

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

	// If the player selects the correct answer, show a screen congratulating
	// them for choosing the right option. After a few seconds, display
	// the next question -- do this without user input.

	// note: grab text value of clicked text
	$(".answerOptions").on("click", function() {
		console.log($(this).attr("data-value"));
		var userPick = $(this).attr("data-value");

		if (userPick === questions[random].correct_a) {
			// $("#question").empty();
			// $("#answerChoices").empty();
			$("#correct-wrong").html("<h2> Correct! </h2>");

			// after couple seconds go to next question
			setTimeout(correctWrong, 4000);
			setTimeout(reset, 4000);
			setTimeout(generateQandA, 5000);
		}
		//   * If the player chooses the wrong answer, tell the player they selected the
		//    wrong option and then display the correct answer. Wait a few seconds,
		//     then show the next question.
		 else if (userPick !== questions[random].correct_a) {				
			$("#correct-wrong").html("<h2> Wrong! Correct answer is " 
				+ questions[random].correct_a + "</h2>");
			// $("#question").empty();
			// $("#answerChoices").empty();					
			
			setTimeout(correctWrong, 4000);
			setTimeout(reset, 4000);
			setTimeout(generateQandA, 5000);
		} 
	});
	//   * If the player runs out of time, tell the player that time's up and
	//    display the correct answer. Wait a few seconds, then show the next question.
	if (seconds === 0) {
		$("#correct-wrong").html("<h2> Time is up! Correct answer is... " 
			+ questions[random].correct_a + " </h2>");
		// $("#question").empty();
		// $("#answerChoices").empty();	
		// show correct answer
		console.log(random);
		// $("correct-wrong").text();
		setTimeout(correctWrong, 4000);
		setTimeout(reset, 4000);
		setTimeout(generateQandA, 4001);
	}
}

$(document).ready(function() {

	// User presses Start
	$('#start').on("click", function(event) {

		// remove Start button
		$("#start").hide();

		// starts counter
		var counter = setInterval(timer, 1000);

		// Prevents submit button from trying to submit the form
		event.preventDefault();
		generateQandA();

	});




	// * On the final screen, show the number of correct answers, incorrect answers, 
	// and an option to restart the game (without reloading the page).


});




