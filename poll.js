
document.getElementById('pollForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the selected option
    var selectedOption = document.querySelector('input[name="option"]:checked').value;

    // Update the poll count
    var optionResult = document.getElementById(selectedOption + 'Result');
    var currentCount = parseInt(optionResult.textContent.match(/\d+/)[0]);
    optionResult.textContent = selectedOption + ': ' + (currentCount + 1) + ' votes';
});
