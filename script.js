const baseURL = "https://pokeapi.co/api/v2/pokemon/";

let buttonElement = document.getElementById('pokemon');

let resultsElement = document.getElementById('results');

let random = Math.floor(Math.random() * 898) + 1; // Thanks w3 for the info and Marco showing me how to implement!





//select the pokemon
fetch(`${baseURL}${random}`)                    //finish interpolation, then run the number
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData);

        displayPokeData(jsonData);
    })

function displayPokeData(jsonData) {
    console.log(jsonData);
    let pokeName = jsonData.name;
    let pokeIMG = jsonData.sprites.front_shiny;

    console.log(pokeName); //pull the name
    console.log(pokeIMG); //pull the image
    //pokeBoxElement.innerHTML= "";

    let pokeNameElement = document.createElement('h2');
    let pokeIMGElement = document.createElement('img');
    

pokeNameElement.innerText = `Name:${pokeName}`;
pokeIMGElement.src = pokeIMG; 

document.body.appendChild(pokeNameElement);
document.body.appendChild(pokeIMGElement);
    
}     

;

        


