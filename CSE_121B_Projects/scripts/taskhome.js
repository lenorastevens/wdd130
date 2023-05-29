/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let studentName = 'Lenora Stevens';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = studentName;

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = '2023';

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
let pictureName = 'Javascript Class Home Image';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute("alt", pictureName);
document.querySelector('img').setAttribute("src", "images/homeImage.jpg");


const school = ["BYU-I Pathways"];

document.querySelector("#school").innerHTML = school;


