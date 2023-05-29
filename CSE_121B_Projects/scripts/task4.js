/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const pInformation = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
pInformation.name = "Lenora Stevens";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
pInformation.photo = {'path':"images/lenoraUssLexington.jpg", 'photoName':"Lenora in front of the USS Lexington"};
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
pInformation.favoriteFoods = ["stroganoff", "red velvet cake", "mongolian beef", "sausage risotto", "pizza", "pad thai"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
pInformation.hobbies = ["photography", "travel", "video games", "exercise", "family movie night", "volleyball"];
// Step 6: Add another property named placesLived with a value of an empty array
pInformation.placesLived = []
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
pInformation.placesLived = {"Bountiful, Utah": "15 years", "Mesa, Arizona": "5 years", "Provo, Utah": "3 years", "Austin, Texas": "23 years"};


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").innerHTML = pInformation.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("src", pInformation.photo.path);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('img').setAttribute("alt", pInformation.photo.photoName);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let foodsList = document.querySelector("#favorite-foods");

let foods = pInformation.favoriteFoods;

for (let i = 0; i < foods.length; i++) {
    let listitem = document.createElement('li');
    listitem.textContent = foods[i];
    // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    foodsList.append(listitem);
}


// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobbyList = document.querySelector("#hobbies");

let favHobbies = pInformation.hobbies;

for (let i = 0; i < favHobbies.length; i++) {
    let listitem = document.createElement('li');
    listitem.textContent = favHobbies[i];
    // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    hobbyList.append(listitem);
}


// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let myPlacesLived = document.querySelector("#places-lived");

const placeList = Object.keys(pInformation.placesLived);
const lengthList = Object.values(pInformation.placesLived);

for (let i = 0; i < placeList.length; i++) {
    let placeItem = document.createElement('dt');
    let lengthItem = document.createElement('dd');
    placeItem.textContent = placeList[i];
    placeItem.id = "place";
    lengthItem.textContent = lengthList[i];
    lengthItem.id = "length";
    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    myPlacesLived.append(placeItem);
    myPlacesLived.append(lengthItem);

}
