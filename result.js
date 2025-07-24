window.addEventListener("DOMContentLoaded", () => {
  const result = JSON.parse(localStorage.getItem("result"));
  const resultDiv = document.getElementById("result");

  if (result) {
    resultDiv.innerHTML = `
      <p><strong>Total CO<sub>2</sub> Emission:</strong> ${result.totalCO2} kg/year</p>
      <ul>
        <li><strong>🚗 Vehicle:</strong> ${result.vehicleCO2} kg</li>
        <li><strong>⚡ Electricity:</strong> ${result.electricityCO2} kg</li>
        <li><strong>🧯 LPG Usage:</strong> ${result.gasCO2} kg</li>
        <li><strong>✈️ Flights:</strong> ${result.flightCO2} kg</li>
      </ul>
    `;
  } else {
    resultDiv.innerHTML = `<p>No data found. Please calculate your footprint first.</p>`;
  }
});

function goBack() {
  window.location.href = "index.html"; // Change to your calculator page name
}
