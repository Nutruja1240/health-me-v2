// Calculation functions
function calculateBMI(weight, height) {
    const heightInMeter = height / 100;
    return weight / (heightInMeter * heightInMeter);
}

function calculateGripRatio(gripStrength, weight) {
    return gripStrength / weight;
}

function calculateAgeGroup(age) {
    if (age >= 19 && age <= 24) return '19-24';
    if (age >= 25 && age <= 29) return '25-29';
    if (age >= 30 && age <= 34) return '30-34';
    if (age >= 35 && age <= 39) return '35-39';
    if (age >= 40 && age <= 44) return '40-44';
    if (age >= 45 && age <= 49) return '45-49';
    if (age >= 50 && age <= 54) return '50-54';
    if (age >= 55 && age <= 59) return '55-59';
    return 'other';
}