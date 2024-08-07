// Write your JavaScript code here!

const { addDestinationInfo, myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
    let pilotNameInput = document.querySelector("input[name=pilotName");
    let copilotNameInput = document.querySelector("input[name=copilotName");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel");
    let cargoMassInput = document.querySelector("input[name=cargoMass");

        formSubmission(document.documentElement, document.getElementById("faultyItems"), pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
        addDestinationInfo(document.getElementById("missionTarget"),)
    let listedPlanets = myFetch();
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });