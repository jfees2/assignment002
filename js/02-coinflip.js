/*eslint-env browser*/

var coinFlip = Math.random() * 11;
var choice = window.prompt("heads or tails? ");


if (coinFlip > 6) {
   var x = "tails";
}
if (coinFlip < 4) {
    var y = "heads";
}

if (x == choice) {
    alert("The flip was tails and you chose tails...you win!");
}
//
if (x != choice){
    alert("The flip was tails but you chose heads...you lose!");
}

if (y == choice) {
   alert("The flip was heads and you chose heads...you win!");
}
//
if (y != choice) {
    alert("The flip was heads but you chose tails...you lose!");
}