console.log("Worked!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

const searchTerm = document.querySelector("h2");
const place = document.querySelector("h3");
const weather = document.querySelector("h4");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  fetch(`http://localhost:3000/weather?address=${location}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.location);
        console.log(data.forecast);
        place.innerText = data.location;
        weather.innerText = data.forecast;
      }
    });
  console.log(location);

  searchTerm.innerText = `Search Term "${location}"`;
});
