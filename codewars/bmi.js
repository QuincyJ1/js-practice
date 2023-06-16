console.clear();

function bmi(weight, height) {
    const bmi1 = weight / Math.pow(height, 2)
if (bmi1 <= 18.5) {
    return "Underweight"
}
if (bmi1 <= 25.0) {
    return "Normal"
}
if (bmi1 <= 30) {
    return "overweight"
}
if (bmi1 > 30) {
    return "obese"
}
    
  }


  console.log(bmi(80, 1.80), "Normal");