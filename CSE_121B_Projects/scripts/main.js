import { API_KEY } from "./config.js";
import processParks from "./parks.js";

// set current year in footer
let dateToday = new Date();
document.querySelector('#year').textContent = dateToday.getFullYear();

//Set Day message in Header
let dayOfWeek = dateToday.getDay();
let message = "";
switch (dayOfWeek) {
    case 0: 
        message = "Sunday";
        break;
    case 1: 
        message = "Monday";
        break;
    case 2:
        message = "Tuesday";
        break;
    case 3:
        message = "Wednesday";
        break;
    case 4:
        message = "Thursday";
        break;
    case 5:
        message = "Friday";
        break;
    case 6:
        message = "Saturday";
        break;    
    default:
        message = "Invalid Day";
        break;
    }
document.querySelector("#message").innerHTML = message;


// listener function that hears the state picked and calls the fetch function to get the NPS list
let stateCode = "";
document.querySelector("#stateCode").addEventListener("input", function () {
    stateCode = this.value;
    const url = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=${API_KEY}`
    getParks(url);
}); 

//empty list container for the functions to draw on after list has been retrieved and processed
let parksList = [];


// fetch function that takes the state code and NPS url and gets a list of arrays with parks information
let parks = null;
async function getParks(url) {
    const response = await fetch(url);
    if (response.ok) {
        parks = await response.json();
        parksList = parks
        processParks(parksList);
    }
}

//reset function that clears screen for the sort
function reset() {
    let parksElement = document.querySelector("#parks");
    parksElement.innerHTML = "";
}

//sort function that allows the user to reverse the order of the parks in that state
function sortBy() {
    reset();

    let sortByValue = document.querySelector("#sortBy").value;

    parksList.data.sort(function(a,b) {
        if (sortByValue === "parkNameAscending") {
            return a.fullName.localeCompare(b.fullName);
        } else if (sortByValue === "parkNameDescending") {
            return b.fullName.localeCompare(a.fullName);
        } 
    });

    processParks(parksList);
}

// listener element that hears when the sort feature is picked
let sortByElement = document.querySelector("#sortBy");
sortByElement.addEventListener("change", sortBy);

