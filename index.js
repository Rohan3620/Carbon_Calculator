document.getElementById("calculatorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const getValue = (id) => parseFloat(document.getElementById(id).value) || 0;

  const familyMembers = getValue("familyMembers");
  const vehicleKm = getValue("vehicleKm");
  const electricityUsage = getValue("electricityUsage");
  const gasUsage = getValue("gasUsage");
  const flights = getValue("flights");

  // CO2 coefficients (kg CO2 per unit)
  const CO2_FACTORS = {
    vehicle: 0.2,
    electricity: 0.9,
    gas: 2.9,
    flight: 0.15,
  };

  const vehicleCO2 = vehicleKm * CO2_FACTORS.vehicle;
  const electricityCO2 = electricityUsage * 12 * CO2_FACTORS.electricity; // yearly
  const gasCO2 = gasUsage * CO2_FACTORS.gas;
  const flightCO2 = flights * CO2_FACTORS.flight;

  const totalCO2 = vehicleCO2 + electricityCO2 + gasCO2 + flightCO2;

  localStorage.setItem(
    "result",
    JSON.stringify({
      totalCO2: totalCO2.toFixed(2),
      vehicleCO2: vehicleCO2.toFixed(2),
      electricityCO2: electricityCO2.toFixed(2),
      gasCO2: gasCO2.toFixed(2),
      flightCO2: flightCO2.toFixed(2),
    })
  );

  window.location.href = "result.html";
});
