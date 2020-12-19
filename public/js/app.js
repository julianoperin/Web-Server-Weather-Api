console.log("Worked!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

const searchTerm = document.querySelector("h2");

const messageOne = document.querySelector(".messageOne");
const messageTwo = document.querySelector(".messageTwo");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  messageOne.textContent = "Fetching...";
  messageTwo.textContent = "";

  fetch(
    `https://japerin-weather-application.herokuapp.com/weather?address=${location}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });

  searchTerm.textContent = `Search Term "${location}"`;
});
