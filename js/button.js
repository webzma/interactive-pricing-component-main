const checkButton = document.querySelector(".icon-check");
const ballButton = document.querySelector(".ball");

checkButton.addEventListener("click", action);

function action() {
  checkButton.classList.toggle("checkButtonActive");
  ballButton.classList.toggle("activeBall");
}
