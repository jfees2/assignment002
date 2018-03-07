var x;

for (x = 0; x <= 100; x++) {
    if (x % 3) {
        console.log(" Marco!");
    }
    
    if (x % 5) {
        console.log(" Polo!");
    }
    
    if (x % 3 && x % 5) {
        console.log("Marco! "+ "Polo!");
    }
   
    else {
        console.log(x);
    }
}