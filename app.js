const conclusion = document.querySelector(".conclusion");
const numbers = document.querySelectorAll(".number");
const signs = document.querySelectorAll(".sign");
const cleaner = document.querySelector(".clear");

let dot = false;
let sign = false;
let quelly = false;
let clear = false;

let firstNumber;
let secondNumber;
let value;
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
        
        } else {
            if (sign === false) {
                firstNumber = numbers[i].textContent;
                conclusion.textContent += firstNumber;
            } else {
                if (clear === false) {
                    conclusion.textContent = "";
                    clear = true;
                }

                dot = false;
                secondNumber = numbers[i].textContent;
                conclusion.textContent += secondNumber;

                if (value === "+") {
                    secondNumber = Number(conclusion.textContent);
                    result = firstNumber + secondNumber;
                } else if (value === "-") {
                    secondNumber = Number(conclusion.textContent);
                    result = firstNumber - secondNumber;
                } else if (value === "*") {
                    secondNumber = Number(conclusion.textContent);
                    result = firstNumber * secondNumber;
                } else if (value === "/") {
                    secondNumber = Number(conclusion.textContent);
                    result = firstNumber / secondNumber;
                }
            }
        }
    });
}


for (let i = 0; i < signs.length; i++) {
    signs[i].addEventListener("click", () => {
        
        if (signs[i].textContent === "=") {
            quelly = true;
            sign = false;
            secondNumber = Number(conclusion.textContent);
            conclusion.textContent = "";
            conclusion.textContent += result;

        } else if (signs[i].textContent !== "=" && sign === false) {
            value = signs[i].textContent;
            sign = true;
            firstNumber = Number(conclusion.textContent);
            conclusion.textContent = "";
            conclusion.textContent += signs[i].textContent;
        }
    })
}

cleaner.addEventListener("click", () => {
    conclusion.textContent = "";
    dot = false;
    sign = false;
    quelly = false;
    clear = false;
})