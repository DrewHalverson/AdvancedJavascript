//Global Variables
let labTitle = "Programming for Designers - Lab 2";

/* This function creates three variables, assigns values to them, and prints
them to the console. It also calls the printLabTitle function */
const init = () => {
    let id = 10;
    let name = "Drew";
    let bornInMadison = false;

    console.log(id);
    console.log(name);
    console.log(bornInMadison);

    printLabTitle();
}

// This function prints the labTitle global variable to the console
const printLabTitle = () => {
    console.log(labTitle);
}