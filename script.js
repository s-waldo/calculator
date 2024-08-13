const calculator = document.querySelector(".calculator-body");
const display = document.getElementById("display");
const keys = document.querySelectorAll("button");
let valueOfFirstInput = 0;
let valueOfSecondInput = 0;
let functionSign = "";
let newNumber = false;
let calculationPerformed = false;

const reset = () => {
  valueOfFirstInput = 0;
  valueOfSecondInput = 0;
  display.innerText = "0";
};

const doCalculation = (sign) => {
  const calculation = eval(valueOfFirstInput + sign + valueOfSecondInput);
  if (calculation > 99999999) {
    return "Error"
  } else {
    return Math.round(calculation * 100000) / 100000
  }
};

const setSign = (action) => {
  if (action === "add") {
    functionSign = "+";
  } else if (action === "subtract") {
    functionSign = "-";
  } else if (action === "divide") {
    functionSign = "/";
  } else {
    functionSign = "*";
  }
};

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const action = key.dataset.action;
    // Action for numbers
    if (!action) {
      if (display.innerText.length >= 8) {
        return;
      }
      if (calculationPerformed) {
        newNumber = true;
        !calculationPerformed;
      }
      if (display.innerText === "0" || newNumber) {
        display.innerText = e.target.innerText;
        newNumber = false;
      } else {
        display.innerText += e.target.innerText;
      }
    }
    // Action for functions
    else if (
      action === "add" ||
      action === "subtract" ||
      action === "divide" ||
      action === "multiply"
    ) {
      valueOfFirstInput = parseFloat(display.innerText);
      setSign(action);
      newNumber = true;
    }
    //Action for clearing
    else if (action === "clear") {
      reset();
    }
    // Action for decimal points
    else if (action === "decimal") {
      display.innerText += ".";
    }
    //Action for submitting
    else if (action === "calculate") {
      valueOfSecondInput = parseFloat(display.innerText);
      display.innerText = doCalculation(functionSign);
    }
    // Action for percentages
    else if (action === "percent") {
      const percent = parseFloat(display.innerText);
      display.innerText = percent / 100;
    }
    // Action for pos-neg functionality
    else {
      const input = parseFloat(display.innerText);
      display.innerText = input * -1;
    }
  });
});
