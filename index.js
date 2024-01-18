document.addEventListener('DOMContentLoaded', function () {
    // Select the input element
    var kgInput = document.getElementById('kg');

    // Add an event listener to the input element
    kgInput.addEventListener('input', function () {
        // Get the entered value in kilograms
        var kgValue = parseFloat(kgInput.value);

        // Convert kilograms to pounds and ounces
        var pounds = kgValue * 2.20462;
        var ounces = kgValue * 35.274;

        // Update the HTML with the calculated values
        document.getElementById('lb').innerText = pounds.toFixed(2) + " lbs";
        document.getElementById('oz').innerText = ounces.toFixed(2) + " oz";
    });
});
