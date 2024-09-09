function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const feet = parseFloat(document.getElementById("feet").value);
    const inches = parseFloat(document.getElementById("inches").value);

    // Check if inputs are valid
    if (isNaN(weight) || weight <= 0 || weight > 500) {
        alert("Please enter a valid weight (between 1 and 500 kg).");
        return;
    }

    if (isNaN(feet) || feet < 0 || feet > 8 || isNaN(inches) || inches < 0 || inches >= 12) {
        alert("Please enter a valid height (feet between 0 and 8, inches between 0 and 11).");
        return;
    }

    // Convert feet and inches to meters
    const heightInMeters = convertToMeters(feet, inches);

    // Calculate BMI
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    document.getElementById("bmiValue").textContent = bmi;

    // Classify BMI and display the result
    const category = classifyBMI(bmi);
    document.getElementById("bmiCategory").textContent = category;
}

function convertToMeters(feet, inches) {
    // 1 foot = 0.3048 meters, 1 inch = 0.0254 meters
    const totalInches = (feet * 12) + inches;
    const heightInMeters = totalInches * 0.0254;
    return heightInMeters;
}

function classifyBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
