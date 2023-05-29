export default function processParks(parks) { 
    //declare the area in the html document that the list items will be created and appended   
    const parksElement = document.querySelector("#parks");
    parksElement.innerHTML = "";

    parks.data.forEach(function (park) {
            //create elements for the list items to be displayed
            let article = document.createElement("article");            
            let h3 = document.createElement("h3");
            h3.id = "fullName";              
            let h4Description = document.createElement("h4")
            h4Description.id = "description";            
            let h4ParkUrl = document.createElement("h4");
            h4ParkUrl.id = "parkUrl";
            
            //write list data to the elements created
            h3.innerText = park.fullName + ", " + park.states;
            h4Description.innerText = "Description: " + park.description;
            h4ParkUrl.innerText = "Park URL: " + park.url;
            
            //add the list elements to be displayed to the html article
            article.appendChild(h3);
            article.appendChild(h4Description);
            article.appendChild(h4ParkUrl);
            
            //iterate through the images array so that all images can be viewed, add them to the html article
            park.images.forEach(function (image) {
              let img = document.createElement("img");
              img.id = "parksimg";
              img.src = image.url;
              img.alt = image.title;
              article.appendChild(img);
            })
    
            // add all elements to the designated id "parks" 
            parksElement.appendChild(article);        
    });
}



  