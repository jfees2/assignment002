
var Ursula = parseInt(window.prompt("Enter points for Ursula: "), 10);
var Paul = parseInt(window.prompt("Enter points for Paul: "), 10);
var Henry = parseInt(window.prompt("Enter points for Henry: "), 10);
var Tabitha = parseInt(window.prompt("Enter points for Tabitha: "), 10);
var Lucy = parseInt(window.prompt("Enter points for Lucy: "), 10);
var avg = (Ursula + Paul + Henry + Tabitha + Lucy) / 5;

if (Ursula >= 90) {
    Ursula = "A";
}
else if (Ursula >= 80) {
    Ursula = "B";
}
else if (Ursula >= 70) {
    Ursula = "C";
}
else if (Ursula >= 61) {
    Ursula = "D";
}
else {
    Ursula = "F";
}


if (Paul >= 90) {
    Paul = "A";
}
else if (Paul >= 80) {
    Paul = "B";
}
else if (Paul >= 70) {
    Paul = "C";
}
else if (Paul >= 61) {
    Paul = "D";
}
else {
    Paul = "F";
}

if (Henry >= 90) {
    Henry = "A";
}
else if (Henry >= 80) {
    Henry = "B";
}
else if (Henry >= 70) {
    Henry = "C";
}
else if (Henry >= 61) {
    Henry = "D";
}
else {
    Henry = "F";
}

if (Tabitha >= 90) {
    Tabitha = "A";
}
else if (Tabitha >= 80) {
    Tabitha = "B";
}
else if (Tabitha >= 70) {
    Tabitha = "C";
}
else if (Tabitha >= 61) {
    Tabitha = "D";
}
else {
    Tabitha = "F";
}

if (Lucy >= 90) {
    Lucy = "A";
}
else if (Lucy >= 80) {
    Lucy = "B";
}
else if (Lucy >= 70) {
    Lucy = "C";
}
else if (Lucy >= 61) {
    Lucy = "D";
}
else {
    Lucy = "F";
}

window.document.write("Student: " + "&nbsp" + "Grade:" + "</br>");
window.document.write("-------------------" + "</br>");
window.document.write("Paul\t\t" + "&nbsp" + Paul + "</br>");
window.document.write("Henry\t\t" + "&nbsp" + Henry + "</br>");
window.document.write("Tabitha\t\t" + "&nbsp" + Tabitha + "</br>");
window.document.write("Lucy\t\t" + "&nbsp" + Lucy + "</br>");
window.document.write("-------------------" + "</br>");
window.document.write("Student Average: \t\t" + avg);
