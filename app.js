const conclusion = document.querySelector(".conclusion");
const numbers = document.querySelectorAll(".number");
const signs = document.querySelectorAll(".sign");

let dot = false;

let firstNumber;
let secondNumber;
let result;

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
            firstNumber = numbers[i].textContent;
            conclusion.textContent += firstNumber;
        }
    });
}

for (let i = 0; i < signs.length; i++) {
    signs[i].addEventListener("click", () => {
        if (signs[i].textContent === "=") {
            conclusion.textContent = "";
            conclusion.textContent += result;
        } else {
            firstNumber = Number(conclusion.textContent);
            conclusion.textContent = "";
            conclusion.textContent += signs[i].textContent;

            for (let i = 0; i < numbers.length; i++) {
                numbers[i].addEventListener("click", () => {
                    secondNumber = Number(numbers[i].textContent);
                    conclusion.textContent = "";
                    conclusion.textContent += secondNumber;
                });
            }
            if (signs[i].textContent === "+") {
                result = parseInt(firstNumber) + secondNumber;
            } else if (signs[i].textContent === "-") {
                result = firstNumber - secondNumber;
            } else if (signs[i].textContent === "*") {
                result = firstNumber * secondNumber;
            } else if (signs[i].textContent === "/") {
                result = firstNumber / secondNumber;
            }}
        }
    )
}