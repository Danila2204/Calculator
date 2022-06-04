const conclusion = document.querySelector(".conclusion");
const numbers = document.querySelectorAll(".number");

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
        conclusion.innerHTML += numbers[i].textContent;
    });
}