const calculator = document.querySelector(".calculator-body");
const display = document.getElementById("display");
const keys = document.querySelectorAll("button");

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const action = key.dataset.action;
    // Action for numbers
    if (!action) {
      console.log(e.target.innerText);
    } 
    // Action for functions
    else if (
      action === "add" ||
      action === "subtract" ||
      action === "divide" ||
      action === "multiply"
    ) {
      console.log(e.target.innerText);
    } 
    //Action for clearing
    else if (action === "clear") {
      console.log(action)
    } 
    // Action for decimal points
    else if (action === "decimal") {
      console.log("float");
    } 
    //Action for submitting
    else if (action === "calculate") {
      console.log("Submitted!");
    }
    // Action for percentages
    else if (action === "percent") {
      console.log(e.target.innerText)
    } 
    // Action for pos-neg functionality
    else {

    }
  });
});
