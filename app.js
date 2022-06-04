const conclusion = document.querySelector(".conclusion");
const numbers = document.querySelectorAll(".number");
const signs = document.querySelectorAll(".sign");

let dot = false;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
        if (numbers[i].textContent === ".") {
            let number = [...numbers[i].textContent];

            for (let i = 0; i < number.length; i++) {
                if (number[i] === ".") {
                    if (dot === false) {
                        conclusion.textContent += ".";
                        dot = true;
                        break;
                    }
                }
            }
            
            console.log("Цикл пройден!")

        } else {
            const firstNumber = numbers[i].textContent;
            conclusion.textContent += firstNumber;
        }
    });
}

for (let i = 0; i < signs.length; i++) {
    signs[i].addEventListener("click", () => {
        if (signs[i].textContent === "=") {
        } else if (signs[i].textContent === "+") {
        } else if (signs[i].textContent === "-") {
        } else if (signs[i].textContent === "*") {
        } else if (signs[i].textContent === "/") {}
    })
}