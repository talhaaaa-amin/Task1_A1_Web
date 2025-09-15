// Set dark mode by default
document.body.classList.add("dark");

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
