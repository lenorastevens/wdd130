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
let pictureName = 'Family picture at Great Basin National Park';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute("alt", pictureName);
document.querySelector('img').setAttribute("src", "images/familyPic.jpg");



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favFoods = ["stroganoff", "red velvet cake", "mongolian beef", "sausage risotto", "pizza", "pad thai"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#favorite-foods").innerHTML = favFoods.join(", ");

// Step 3: declare and instantiate a variable to hold another favorite food
let moreFood = 'cosmic crisp apples';

// Step 4: add the variable holding another favorite food to the favorite food array
favFoods.push(moreFood);

// Step 5: repeat Step 2
document.querySelector("#favorite-foods").innerHTML = favFoods.join(", ");

// Step 6: remove the first element in the favorite foods array
favFoods.shift();

// Step 7: repeat Step 2
document.querySelector("#favorite-foods").innerHTML = favFoods.join(", ");

// Step 8: remove the last element in the favorite foods array
favFoods.pop();

// Step 7: repeat Step 2
document.querySelector("#favorite-foods").innerHTML = favFoods.join(", ");


document.querySelector("#favorite-foods").innerHTML = favFoods.join(", ");
