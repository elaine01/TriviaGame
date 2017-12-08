var questions = [
	{
		q: "Which of these countries is NOT a part of the Asian continent?",
		correct_a: "Suriname",
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
		all_a: [
			"Cheetah",
			"Puma",
			"Tiger",
			"Leopard"
		]
	}
];

var finishedQuestions = [];

var seconds = 11;
var j = 0;
var correct = 0;
var wrong = 0;

// setTimeout(timer, seconds);

function timer() {
	// seconds = seconds-1;
	// if (seconds < 0) {
	// 	clearInterval(counter);
	// 	return;
	// }

	if (seconds > 0) {
		seconds--;
		$("#time-left").html("<p>Time Remaining: " + seconds + " seconds</p>");
		console.log(seconds);
	} 
	
}

function reset() {
	seconds = 11;
	$("#question").empty();
	$("#answerChoices").empty();

}

// // if user gets right answer
// function rightAnswer() {
// 	$("#answerChoices").empty();
// 	questions[]
// }

// // if user gets wrong answer
// function wrongAnswer() {

// }


$(document).ready(function() {

	// User presses Start
	$('#start').on("click", function(event) {


		// remove Start button
		$("#start").hide();

		// Prevents submit button from trying to submit the form
		event.preventDefault();

		function generateQandA() {
			// randomize questions
			// var random = Math.floor(Math.random() * questions.length);

			console.log(j);

			// console.log(questions);
			console.log(questions[j].q);
			console.log(questions[j].all_a);
			// console.log(questions[random].all_a[random]);
			console.log(questions[j].correct_a);
			// console.log(questions[random].all_a.length);		
			console.log(j);			

			// time remaining
			timer();
			var counter = setInterval(timer, 1000);

			// Question
			$("#question").html(questions[j].q);

			// Answer
			for (var i = 0; i < questions[j].all_a.length; i++) {
				var div = $("<div>");
				div.text(questions[j].all_a[i]);
				div.addClass("answerOptions");
				div.attr("data-value", questions[j].all_a[i]);
				$("#answerChoices").append(div);
				console.log(div);
			}


			if (seconds === 0) {
				$("#correct-wrong").html("<h2> Time is up! Correct answer is... </h2>");
				// $("#question").empty();
				// $("#answerChoices").empty();	
				// show correct answer
				console.log(random);
				// $("correct-wrong").text();
				setTimeout(correctWrong, 4000);
				setTimeout(reset, 4000);
				j++;
				wrong++;
				setTimeout(generateQandA, 5000);
			}

			// If the player selects the correct answer, show a screen congratulating
			// them for choosing the right option. After a few seconds, display
			// the next question -- do this without user input.

			// note: grab text value of clicked text
			$(".answerOptions").on("click", function() {
				console.log($(this).attr("data-value"));
				var userPick = $(this).attr("data-value");

				function correctWrong() {
					$("#correct-wrong").empty();		
				}

				 if (userPick === questions[j].correct_a) {
					// $("#question").empty();
					// $("#answerChoices").empty();
					$("#correct-wrong").html("<h2> Correct! </h2>");

					// after couple seconds go to next question
					setTimeout(correctWrong, 4000);
					setTimeout(reset, 4000);
					j++;
					correct++;
					console.log(j);
					setTimeout(generateQandA, 5000);
				} else if (userPick !== questions[j].correct_a) {				
					$("#correct-wrong").html("<h2> Wrong! </h2>");
					// $("#question").empty();
					// $("#answerChoices").empty();					
					setTimeout(correctWrong, 4000);
					setTimeout(reset, 4000);
					j++;
					wrong++;
					setTimeout(generateQandA, 5000);
				} 
			});

		}
		
		generateQandA();

	// * The scenario is similar for wrong answers and time-outs.

	//   * If the player runs out of time, tell the player that time's up and
	//    display the correct answer. Wait a few seconds, then show the next question.
	//   * If the player chooses the wrong answer, tell the player they selected the
	//    wrong option and then display the correct answer. Wait a few seconds,
	//     then show the next question.

	// * On the final screen, show the number of correct answers, incorrect answers, 
	// and an option to restart the game (without reloading the page).

	if (j === 3) {
		$("correct-wrong").html("<div> Correct: " + correct + "</div>"
			+ "<div> Wrong: " + wrong + "</div>")
	}

	});
});



