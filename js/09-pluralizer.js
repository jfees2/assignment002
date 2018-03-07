var noun = window.prompt("Please enter a noun in singular form: ");
var number = parseInt(window.prompt("Please enter a number: "), 10);

if (number > 1) {
    noun = noun + "s";
}

window.document.write(number + " " + noun);