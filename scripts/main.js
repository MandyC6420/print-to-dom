// console.log("Welcome to the main module")

//Hello, world
// In your index.html file, add an h1 element with an id of #hello-container.

// In your JavaScript file, declare a new variable called greeting and give it a value of "Hello, world"
let greeting = "Hello, World";

// Use document.querySelector to target your #hello-container
let targetHelloContainer = document.querySelector("#hello-container");

// User the .innerHTML property to insert the value of your greeting variable into your #hello-container element.
targetHelloContainer.innerHTML = greeting;

// let headingElement = document.querySelector("#main-heading");
// headingElement.innerHTML = "Hello, world!";

// Keeping track of chores
// In your index.html file, create an empty <ul> element and give it an id of #chores-container

// In your JavaScript file, declare a new letiable called choresArray. This should be an array of chores you do regularly.
// let choresArray = ["Sweep", "Dust", "Mop", "Dishes", "Trash"];
// let str = "<ul>";
// Loop through your choresArray.
// choresArray.forEach(function (chore) {
//   str += "<li>"+ chore + "<li>";
// });

// str += "<ul>";
// document.getElementById("chores-container").innerHTML = str;
// For each chore, create a new <li> element and insert it into the #chores-container element.

// For each chore, create a new <li> element and insert it into the #chores-container element.

// You should end up with a bulleted list of all your regular chores.

let choresArray = ["Sweep", "Dust", "Mop", "Dishes", "Trash"];

for (let i = 0; i < choresArray.length; i++) {
  document.querySelector(
    "#chores-container"
  ).innerHTML += `<li>${choresArray[i]}</li>`;
}

// movieProject

let movieObject = {
  title: "Star Wars: A New Hope",
  genre: "Science Fiction",
  releaseDate: "May 25, 1977",
};

//   Use document.querySelector() to grab a reference to each element in your HTML.
// Use the .innerHTML property to set the text of each element to the matching value in your object. (For example, the h1 with the id of "title" should contain the title property of your movieObject, etc).

document.querySelector("#title").innerHTML = movieObject.title;
document.querySelector("#genre").innerHTML = movieObject.genre;
document.querySelector("#release-date").innerHTML = movieObject.releaseDate;

// Downtown Restaurants

let downtownRestaurants = [
  "Backyard Pizza and Raw Bar",
  "The Bodega",
  "Surin of Thailand",
  "Bahnhof",
  "Jim's Steak and Spaghetti House",
  "The Peddler",
  "Jewel City Seafood Market",
  "Black Sheep Burritos & Brews",
  "La Famiglia",
  "Le Bistro",
  "Charlie Graingers",
  "The Cellar Door",
];

// Loop over the downtownRestaurants array.
for (let i = 0; i < downtownRestaurants.length; i++) {
  document.querySelector(
    "#restaurants-list"
  ).innerHTML += `<li>${downtownRestaurants[i]}</li>`;
}
// Use the loop to create an <li> element for each item in the array.

// Use document.querySelector and .innerHTML to add each new <li> element to the #restaurants-list container.

// You should see a bulleted list of restaurants in the DOM.

// Sandwich Toppings

let sandwichToppings = [
  "pickles",
  "extra cheese",
  "lettuce",
  "tomatoes",
  "avocado",
  "bacon",
  "mayo",
  "mustard",
];

// Write a function that does the following things:
function sandwichList() {
  
  for (let i = 0; i < sandwichToppings.length; i++) {
    document.querySelector(
        "#sandwich-container").innerHTML += `<li>${sandwichToppings[i]}</li>`;
  }
  
}
sandwichList()
// sandwichToppings(sandwichList());
// Loop through sandwichToppings

// Build an <li> element for each item in the array.

// Use document.querySelector and .innerHTML to print your HTML string to the "#sandwich-container".

// Call the function. You should see a bulleted list of all the sandwich toppings in the DOM.


// Movie Schedule

let movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      currentlyPlaying: true,
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    },
    {
      title: "The Grinch",
      rating: "G",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "A Star is Born",
      rating: "R",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
    },
     {
      title: "Bohemian Rhapsody",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Bohemian_Rhapsody_poster.png/220px-Bohemian_Rhapsody_poster.png"
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    },
    {
      title: "Robin Hood",
      rating: "PG-13",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: "https://i.pinimg.com/564x/7a/dc/4f/7adc4fb12c2b64ea4066d04e3d0769cc.jpg"
    }
  ]

//   Use a for loop to loop through the movies, 
  for(let movie of movieSchedule){
    if (movie.currentlyPlaying){
        document.querySelector('#movie-schedule').innerHTML +=
        `<section>
        <h1>${movie.title}</h1>
        <p>Rated ${movie.rating}</p>
        <img src="${movie.poster}"/>
        </section>`
    }
    
  }

  
// build an HTML representation of each movie, and insert it into the #movie-schedule container in the DOM.

// You can use any elements you like in your HTML string as long as all the data in the movieSchedule object is included.

// Movie Schedule

// let movieSchedule = [
//     {
//       title: "Ralph Breaks the Internet",
//       rating: "PG",
//       cu
  }
// build an HTML representation of each movie, and insert it into the #movie-schedule container in the DOM.

// You can use any elements you like in your HTML string as long as all the data in the movieSchedule object is included.
