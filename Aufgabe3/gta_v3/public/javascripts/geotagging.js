// File origin: VS1LAB A2

/* eslint-disable no-unused-vars */

// This script is executed when the browser loads index.html.

// "console.log" writes to the browser's console. 
// The console window must be opened explicitly in the browser.
// Try to find this output in the browser...
console.log("The geoTagging script is going to start...");

/**
 * A function to retrieve the current location and update the page.
 * It is called once the page has been fully loaded.
 */

//TODO: Aufagbe 3.2.2 b
function updateLocation(location){

    //check if latitude and longitude are already in the fieldset
    if (document.getElementById("tag_latitude").value == "" && document.getElementById("tag_longitude").value == ""){  

        LocationHelper.findLocation((location) => {

        let newLatitude = location.latitude;
        let newLongitude =  location.longitude;

        console.log("Getting location: " + newLatitude + ", " + newLongitude);

        //updated the feld in tagging and hidden input in discovery
        document.getElementById("tag_latitude").value = newLatitude;
        document.getElementById("discovery_latitude").value = newLatitude;
        
        document.getElementById("tag_longitude").value = newLongitude;
        document.getElementById("discovery_longitude").value = newLongitude;

        //get new map from mapQuest with API key and update the image
        let newMap = new MapManager("qLcGFWbvMErinkcPHNT3lOnenpAXPru0");
        let newMapUrl = newMap.getMapUrl(newLatitude,newLongitude);

        document.getElementById("mapView").src = newMapUrl;

        });

    }

}


// Wait for the page to fully load its DOM content, then call updateLocation
document.addEventListener("DOMContentLoaded", () => {
    updateLocation();
});