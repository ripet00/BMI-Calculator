function calculateBMI() {
  const heighInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const outputDiv = document.getElementById("output");

  const height = parseFloat(heighInput.value);
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    outputDiv.innerHTML = `<div class="container">Please enter valid value</div>`;
    return;
  }

  const bmi = weight / (height / 100) ** 2;
  let category = "";
  let explanation = "";

  if (bmi < 18.5) {
    category = "Underweight";
    explanation = "Kurang makan";
  } else if (bmi < 25) {
    category = "Normal Weight";
    explanation = "lumayan normal lahh";
  } else if (bmi < 30) {
    category = "Overweight";
    explanation = "jarang olahraga ya, ngemil terus sihh";
  } else {
    category = "Obese";
    explanation = "waduhh parah banget !!!";
  }

  // resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category})`;

  outputDiv.innerHTML = `<div class="container">
      <div id="output">Your BMI is ${bmi.toFixed(2)} (${category})</div>
      <div id="explanation">Based on your BMI the explanation is : <br> </div>
      <p> ${explanation}</p>
    </div> `;
}

function clearBMI() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("output").innerHTML = "";
}
