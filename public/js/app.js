console.log("Worked!");

const alfa = document.querySelector(".alfa");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  alfa.innerHTML = "<h1>Hi there</h1>";
});
