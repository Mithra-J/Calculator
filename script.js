const display = document.getElementById("display");

// Function to clear the display
function clearDisplay() {
    display.textContent = "";
}

// Function to remove the last character from the display
function backspace() {
    display.textContent = display.textContent.slice(0, -1);
}

// Function to append a value to the display
function appendValue(value) {
    display.textContent += value;
}

// Function to evaluate the expression in the display
function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = "Error";
    }
}
