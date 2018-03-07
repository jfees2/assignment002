var coinFlip;
var i;
var x;
for (i = 0; i <= 10; i += 1) {
    x = Math.floor(Math.random());
    coinFlip = x;
}

var heads = 0;
var tails = 1;

if (x == heads){
    window.console.log("Heads");
}

if (x == tails) {
    window.console.log("Tails");
}


