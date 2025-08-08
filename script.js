let expression_field = document.querySelector('.input-field');
let history_field = document.querySelector('.history');
let cropNameField = document.getElementById('cropName');

let crop = prompt("Введіть назву культури:");
let pricePer1000 = parseFloat(prompt("Введіть ціну за 1000л:"));

cropNameField.textContent = crop;

// Кнопки цифр та операцій
document.querySelector('.btn-plus').addEventListener('click', () => expression_field.value += '+');
document.querySelector('.btn-minus').addEventListener('click', () => expression_field.value += '-');
document.querySelector('.btn-mult').addEventListener('click', () => expression_field.value += '*');
document.querySelector('.btn-div').addEventListener('click', () => expression_field.value += '/');
document.querySelector('.btn-point').addEventListener('click', () => expression_field.value += '.');
document.querySelector('.btn-clear').addEventListener('click', () => expression_field.value = '');
for (let i = 0; i <= 9; i++) {
    document.querySelector(`.btn-${i}`).addEventListener('click', () => expression_field.value += i);
}

// Обчислення
document.querySelector('.btn-equal').addEventListener('click', function() {
    try {
        let result = eval(expression_field.value);
        history_field.innerHTML += `<p>${expression_field.value} = ${result}</p>`;
        expression_field.value = result;
    } catch {
        expression_field.value = "Помилка";
    }
});

// Розрахунок ціни врожаю
document.querySelector('.btn-price').addEventListener('click', function() {
    let liters = parseFloat(prompt("Введіть кількість літрів:"));
    if (!isNaN(liters)) {
        let total = (pricePer1000 / 1000) * liters;
        alert(`Ціна за ${liters}л ${crop}: ${total.toFixed(2)} грн`);
        history_field.innerHTML += `<p>${liters}л → ${total.toFixed(2)} грн</p>`;
    }
});
