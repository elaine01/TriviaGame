// * You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz. 

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.







$(document).ready(function() {
	$("#submit").hide();

	$('#start').on("click", function(event) {
		
	    // remove Start button
	    $("#start").hide();
	    $("#submit").show();

	    $("#submit").on("click", function(event) {
	    	// prevents submit button
	    	preventDefault();	
	    })
	    

	 //    function timer() {
	 //    	//timer
		// 	var time = 11;
		// 	var timer = setInterval(function() {
		// 		time--;
		// 		// console.log(time);
		// 		$('#time-left').html("Time Remaining: " + time + " seconds");
		// 		if (time === 0) {
		// 			clearInterval(timer);
		// 			game.timesUp();
		// 			console.log(time);
		// 		}
		// 	}, 1000);
		// }
	 //    timer();

		// q1
		$("#q-1").html("<br>" + questions[0].q);
		for (var i = 0; i < questions[0].all_a.length; i++) {
			var div = $("<br> <label class='option'> <input type='radio' name='radio'"
			+ " value=" + i + ">" + questions[0].all_a[i]
			+ "</label>");
			$("#a-1").append(div);

			if ()
		}
		// q2
		$("#q-2").html("<br>" + questions[1].q);
		for (var i = 0; i < questions[1].all_a.length; i++) {
			var div = $("<br> <label class='option-2'> <input type='radio' name='radio2'"
				+ " value=" + i + ">" + questions[1].all_a[i]
				+ "</label>");
			$("#a-2").append(div);
		}
		// q3
		$("#q-3").html("<br>" + questions[2].q);
		for (var i = 0; i < questions[2].all_a.length; i++) {
			var div = $("<br> <label class='option-3'> <input type='radio' name='radio3'"
				+  " value=" + i + ">" + questions[2].all_a[i]
				+ "</label>");
			$("#a-3").append(div);
		}
		// q4
		$("#q-4").html("<br>" + questions[3].q);
		for (var i = 0; i < questions[3].all_a.length; i++) {
			var div = $("<br> <label class='option-4'> <input type='radio' name='radio4'"
				+  " value=" + i + ">" + questions[3].all_a[i]
				+ "</label>");
			$("#a-4").append(div);
		}
		// correct answer
		console.log(questions)

		value = $("input[type='radio']:checked").val();
		console.log(value);
		console.log(questions[2].correct_value);

		if (value == undefined) {
			$(document).find("#message").text("Please select an answer");
			$(document).show("#message").text("Please select an answer");
		} else {
			$(document).find("#message").hide();
			if (value == questions[0].correct_value) {
				correct++;
			} else if (value == questions[1].correct_value) {
				correct++;
			} else if (value == questions[2].correct_value) {
				correct++;
			} else if (value == questions[3].correct_value) {
				correct++;
			} else {
				wrong++
			}
		}
		
	});
});

// preventDefault();


var game = {
	correct: 0,
	wrong: 0,
	unanswered: 0,
	// qOrder: -1,
	timesUp: function() {
		$("#correct-wrong").html("<h2> Time is up! Here's your score: </h2>"
		+ "<h3> Correct: " + game.correct + "<br>"
		+ "Wrong: " + game.wrong + "</h3>");
	},
}

var questions = [{
        q: "Which of these countries is NOT a part of the Asian continent?",
        correct_a: "Suriname",
        correct_value: 0,
        // img: "<img src=' '>",
        all_a: ["Suriname", "Georgia", "Russia", "Singapore"]
    }, {
        q: "Who is attributed credit for recording the epic poem The Odyssey?",
        correct_a: "Homer",
        correct_value: 3,
        // img: "<img src=' '>",
        all_a: ["Aristotle", "Odysseus", "Socrates", "Homer"]
    }, {
        q: "The book &quot;The Little Prince&quot; was written by...",
        correct_a: "Antoine de Saint-Exup&eacute;ry",
        correct_value: 2,
        // img: "<img src=' '>",
        all_a: ["Miguel de Cervantes Saavedra",
        "Jane Austen", "Antoine de Saint-Exup&eacute;ry", "F. Scott Fitzgerald"]
    }, {
        q: "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
        correct_a: "Cheetah",
        correct_value: 0,
        // img: "<img src=' '>",
        all_a: ["Cheetah", "Puma", "Tiger", "Leopard"]
}];