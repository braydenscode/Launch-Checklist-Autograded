// Write your JavaScript code here!

// const { addDestinationInfo, myFetch, pickPlanet, validateInput } = require("./scriptHelper");
// I believe this line was automatically added by VSCode and was preventing the program from running properly.

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let pilotName = document.querySelector("input[name=pilotName").value;
        let copilotName = document.querySelector("input[name=copilotName").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel").value;
        let cargoMass = document.querySelector("input[name=cargoMass").value;
    
            formSubmission(document, document.getElementById("faultyItems"), pilotName, copilotName, fuelLevel, cargoMass);
    })
        
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let myPlanet = pickPlanet(listedPlanets)
        addDestinationInfo(document, myPlanet.name, myPlanet.diameter, myPlanet.star, myPlanet.distance, myPlanet.moons, myPlanet.image)
    })
    
 });