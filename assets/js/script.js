const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    const bmi = (weight / (height * height)).toFixed(2);
    const waterIntake = (weight * 35).toFixed(0); // Consumo diário de água em ml

    const value = document.getElementById("value");
    let description = "";

    value.classList.add("attention");

    document.getElementById("infos").classList.remove("hiden");

    if (bmi < 18.5) {
        description = "Cuidado! Você está abaixo do peso!";
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = "Você está no peso ideal!";
        value.classList.remove("attention");
        value.classList.add("normal");
    } else if (bmi > 25 && bmi <= 30) {
        description = "Cuidado! Você está com sobrepeso!";
    } else if (bmi > 30 && bmi <= 35) {
        description = "Cuidado! Você está com obesidade moderada!";
    } else if (bmi > 35 && bmi <= 40) {
        description = "Cuidado! Você está com obesidade severa!";
    } else {
        description = "Cuidado! Você está com obesidade mórbida!";
    }

    value.textContent = bmi.replace(".", ",");
    document.getElementById("description").textContent = description;

    // Atualizando a informação sobre consumo de água
    let waterInfo = document.getElementById("water-info");
    let waterIntakeText = document.getElementById("water-intake");

    waterIntakeText.innerHTML = `<span class="highlight">Recomendado:</span><br>Beba aproximadamente ${waterIntake} ml (<span class="litros">${(
        waterIntake / 1000
    ).toFixed(2)}</span> litros) de água por dia.`;

    // Exibir a recomendação de água
    waterInfo.classList.remove("hidden");
});
