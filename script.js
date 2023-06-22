
// For input
const convertCelsius = () => {
    let InputField = document.getElementById('InputField');
    let InputField2 = document.getElementById('InputField2');
}

// Convert celsius to fahrenheit
    InputCelsius.oninput = () => {
    let output = parseFloat(InputCelsius.value) * 9/5 + 32;

// Display the fahrenheit output
    InputField2.value = parseFloat(output.toFixed(2));
    console.log(InputField2.value);
};

// Display the calculation
    InputField3.textContent = "How to Get " + Fahrenheit + " °F : " + Celsius + "°C * (9/5) + 32 ";

// To reverse from celsius-to-fahrenheit to fahrenheit-to-celsius
function reversetoFahrenheit() {
    resetFields();
    var InputField2 = document.getElementById("InputField");
    var InputField1 = document.querySelector('label(for="InputField1")');
    var ConvertButton = document.querySelector('button(onclick="convertCelsius()');
    var ReverseButton = document.querySelector('button(onclick="reverseFahrenheit()');

    // Change label and input placeholder to fahrenheit
    InputField1.textContent = "Fahrenheit:";
    InputField2.placeholder = "Enter temperature in Fahrenheit";

    // Change event onclick for convert and reverse button
    ConvertButton.setAttribute("onclick", "converttoFahrenheit()");
    ReverseButton.setAttribute("onclick", "reversetoCelsius()");
}

// To convert fahrenheit to celsius
function converttoFahrenheit() {
    var InputField1 = document.getElementById("InputField1");
    var InputField2 = document.getElementById("InputField2");
    var InputField3 = document.getElementById("InputField3");
}

// To check whether the Fahrenheit input is not a number
if (InputField2.value === "" || isNan(InputField2.value)) {
    alert("Please enter a valid number in Fahrenheit.");
    return;
}

// Convert fahrenheit to celsius
    InputField2.oninput = () => {
    let output = parseFloat(InputField2.value) * 9/5 + 32;

// Display the celsius output
    InputField.value = parseFloat(output.toFixed(2));
    console.log(InputField.value);

// Display the calculation
InputField3.textContent = "How to Get " + Celsius + "°C: (" + Fahrenheit + " °F - 32) * 5/9";

};

// To detect whether the input is null or a string type
if (isNan(InputCelsius.value)) {
    alert("Please enter a valid number in Celsius.");           
    return;
} else {
    var Celsius = parseFloat(InputCelsius.value);  
    var Fahrenheit = (Celsius * 9) / 5 + 32;
}

// Funtion that is used to clear input, result, and calculation
function resetFields() {
    var InputField = document.getElementById("InputField");
    var InputField2 = document.getElementById("InputField2");
    var InputField3 = document.getElementById("InputField3");

    InputField.value = "";
    InputField2 = "";
    InputField3 = "";
}