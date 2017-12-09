
$('#start').on("click", function(event) {
    // remove Start button
    $("#start").hide();
    // start timer
    game.timer();
    setInterval(game.timer, 1000);
    // console.log(counter);
    // Prevents submit button from trying to submit the form    
    // event.preventDefault();

});