var i; 
var number = parseInt(window.prompt("Please choose a number to start the Countdown: "), 10);

for (i = number; i >= 1; i -= 1) {
    window.document.write(i + "</br>");
}