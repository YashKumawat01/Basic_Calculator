document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('input[name="display"]');

    document.addEventListener('keydown', function(event) {
        const key = event.key;

        if (key.match(/^[0-9+\-*/.()]$/)) {
            // Allow numbers and valid operators
            display.value += key;
        } else if (key === 'Enter') {
            // Handle the Enter key (for calculating the result)
            calculate();
        } else if (key === 'Backspace') {
            // Handle the Backspace key (for deleting last character)
            display.value = display.value.slice(0, -1);
        } else if (key === 'Escape') {
            // Handle the Escape key (for clearing the display)
            display.value = '';
        } else if (key.match(/^[a-zA-Z]$/)) {
            // Display "Invalid Syntax" for alphabetic characters
            display.value = "Invalid Syntax";
        }

        // Prevent the default action to avoid double entry
        event.preventDefault();
    });
});

function addToDisplay(value) {
    const display = document.querySelector('input[name="display"]');
    if (/^[a-zA-Z]+$/.test(value)) {
        display.value = "Invalid Syntax";
    } else {
        display.value += value;
    }
}

function calculate() {
    const display = document.querySelector('input[name="display"]');
    try {
        if (/^[\d+\-*/.]+$/.test(display.value)) {
            display.value = eval(display.value);
        } else {
            display.value = "Invalid Syntax";
        }
    } catch (e) {
        display.value = "Invalid Syntax";
    }
}
