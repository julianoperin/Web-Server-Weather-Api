console.log("Worked!");

// const input = document.querySelector(".input");
// const btn = document.querySelector(".btn");

// console.log(input.target.value);

fetch("http://localhost:3000/weather?address=union")
  .then((response) => response.json())
  .then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
