// Отримання canvas для другого графіка
const secondCanvas = document.getElementById('mySecondChart');
const secondCtx = secondCanvas.getContext('2d');

// Дані для графіка (пустий на початку)
const processingTimes = [];
const labels = []; // Початково масив міток порожній

// Створення другого графіка
const mySecondChart = new Chart(secondCtx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Час обробки новини (с)',
            data: processingTimes,
            borderColor: 'green',
            fill: false,
        }]
    },
    options: {
        // Додайте опції графіка за необхідності
    }
});

// Функція для оновлення графіка з новими даними
function updateProcessingTimeChart(newTime) {
    const currentTime = new Date();
    labels.push(currentTime.getSeconds() + 'с');
    processingTimes.push(newTime);

    // Оновлення даних графіка
    mySecondChart.update();
}
